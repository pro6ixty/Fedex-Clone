export interface PrintableDocument {
  title: string
  content: string
  type: "label" | "receipt" | "invoice"
}

export class PrintService {
  static printShippingLabel(packageData: any) {
    const labelContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #7c3aed; margin: 0;">FedEx Shipping Label</h1>
          <p style="margin: 5px 0; font-size: 14px;">Tracking: ${packageData.trackingNumber}</p>
        </div>
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 30px;">
          <div style="width: 45%;">
            <h3 style="border-bottom: 2px solid #7c3aed; padding-bottom: 5px;">FROM:</h3>
            <p><strong>${packageData.senderName}</strong></p>
            <p>${packageData.senderAddress}</p>
            <p>${packageData.senderPhone}</p>
          </div>
          <div style="width: 45%;">
            <h3 style="border-bottom: 2px solid #7c3aed; padding-bottom: 5px;">TO:</h3>
            <p><strong>${packageData.receiverName}</strong></p>
            <p>${packageData.receiverAddress}</p>
            <p>Trujillo, Peru</p>
          </div>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="border: 3px solid #000; padding: 20px; display: inline-block;">
            <div style="font-size: 48px; font-weight: bold; letter-spacing: 3px;">
              ${packageData.trackingNumber}
            </div>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <p><strong>Service:</strong> ${packageData.service || "Express International"}</p>
          <p><strong>Weight:</strong> ${packageData.weight || "2.5 kg"}</p>
          <p><strong>Dimensions:</strong> ${packageData.dimensions || "30x20x15 cm"}</p>
          <p><strong>Ship Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    `

    this.printDocument({
      title: "FedEx Shipping Label",
      content: labelContent,
      type: "label",
    })
  }

  static printReceipt(packageData: any) {
    const receiptContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 400px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #7c3aed; margin: 0;">FedEx Receipt</h2>
          <p style="margin: 5px 0; font-size: 12px;">Transaction ID: ${Date.now()}</p>
        </div>
        
        <div style="border-top: 1px dashed #ccc; border-bottom: 1px dashed #ccc; padding: 15px 0; margin: 15px 0;">
          <p><strong>Tracking Number:</strong> ${packageData.trackingNumber}</p>
          <p><strong>Service:</strong> Express International</p>
          <p><strong>From:</strong> ${packageData.from}</p>
          <p><strong>To:</strong> ${packageData.to}</p>
          <p><strong>Receiver:</strong> ${packageData.receiver}</p>
        </div>
        
        <div style="margin: 15px 0;">
          <p style="display: flex; justify-content: space-between;"><span>Shipping Cost:</span><span>$45.99</span></p>
          <p style="display: flex; justify-content: space-between;"><span>Insurance:</span><span>$5.00</span></p>
          <p style="display: flex; justify-content: space-between;"><span>Tax:</span><span>$4.08</span></p>
          <p style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid #ccc; padding-top: 5px;"><span>Total:</span><span>$55.07</span></p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
          <p>Thank you for choosing FedEx!</p>
          <p>Date: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    this.printDocument({
      title: "FedEx Receipt",
      content: receiptContent,
      type: "receipt",
    })
  }

  private static printDocument(doc: PrintableDocument) {
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${doc.title}</title>
          <style>
            @media print {
              body { margin: 0; }
              @page { margin: 0.5in; }
            }
          </style>
        </head>
        <body>
          ${doc.content}
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }
          </script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }
}
