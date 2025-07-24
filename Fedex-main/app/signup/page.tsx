"use client"

import Link from "next/link"
import { Package, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"

export default function SignUpPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
            <Package className="h-6 w-6 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold">{t("signUpTitle")}</CardTitle>
          <CardDescription>Create your FedEx account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Mail className="h-4 w-4" />
            <AlertDescription>{t("signUpDisabled")}</AlertDescription>
          </Alert>

          <div className="text-center">
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => (window.location.href = "mailto:support@fedex.com")}
            >
              {t("contactSupport")}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-purple-600 hover:text-purple-500">
                {t("login")}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
