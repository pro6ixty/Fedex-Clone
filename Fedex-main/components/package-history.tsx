"use client"

import { useState } from "react"
import { Calendar, Package, MapPin, DollarSign, Eye, Download, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { packageHistory, type PackageHistoryItem } from "@/lib/package-history"
import { PrintService } from "@/lib/print-service"
import { useLanguage } from "@/contexts/language-context"

export function PackageHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("date")
  const { t } = useLanguage()

  const filteredHistory = packageHistory
    .filter((item) => {
      const matchesSearch =
        item.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.receiver.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.to.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || item.status === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.shipDate).getTime() - new Date(a.shipDate).getTime()
        case "cost":
          return b.cost - a.cost
        case "status":
          return a.status.localeCompare(b.status)
        default:
          return 0
      }
    })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "inTransit":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return t("delivered")
      case "inTransit":
        return t("inTransit")
      case "cancelled":
        return "Cancelled"
      default:
        return status
    }
  }

  const handlePrintReceipt = (item: PackageHistoryItem) => {
    PrintService.printReceipt({
      trackingNumber: item.trackingNumber,
      from: item.from,
      to: item.to,
      receiver: item.receiver,
      service: item.service,
      cost: item.cost,
    })
  }

  const totalShipped = packageHistory.length
  const totalDelivered = packageHistory.filter((item) => item.status === "delivered").length
  const totalSpent = packageHistory.reduce((sum, item) => sum + item.cost, 0)

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <Package className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalShipped}</p>
                <p className="text-sm text-gray-300">Total Packages</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className="glass-effect-dark text-white border-green-500/30 hover-lift animate-slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600/20 rounded-full">
                <Package className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalDelivered}</p>
                <p className="text-sm text-gray-300">Delivered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className="glass-effect-dark text-white border-blue-500/30 hover-lift animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
                <p className="text-sm text-gray-300">Total Spent</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="glass-effect-dark text-white border-purple-500/30">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            Filter & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                placeholder="Search by tracking number, receiver, or destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="inTransit">In Transit</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Ship Date</SelectItem>
                  <SelectItem value="cost">Cost</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Package History List */}
      <div className="space-y-4">
        {filteredHistory.map((item, index) => (
          <Card
            key={item.id}
            className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Package Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg font-mono">{item.trackingNumber}</h3>
                      <Badge className={`mt-2 ${getStatusColor(item.status)}`}>{getStatusText(item.status)}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-purple-400">${item.cost.toFixed(2)}</p>
                      <p className="text-sm text-gray-400">{item.service}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">From:</span>
                      <span>{item.from}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300">To:</span>
                      <span>{item.to}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Package className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300">Receiver:</span>
                      <span>{item.receiver}</span>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400">Ship Date</p>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">{new Date(item.shipDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    {item.deliveryDate && (
                      <div>
                        <p className="text-sm text-gray-400">Delivery Date</p>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-green-400" />
                          <span className="text-sm">{new Date(item.deliveryDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => (window.location.href = `/tracking?number=${item.trackingNumber}`)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={() => handlePrintReceipt(item)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Print Receipt
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <Card className="glass-effect-dark text-white border-purple-500/30">
          <CardContent className="p-12 text-center">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No packages found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
