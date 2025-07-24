"use client"

import { useEffect } from "react"

export function SmartSuppChat() {
  useEffect(() => {
    // Create the Smartsupp script
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = 'e41d4d781a530f18b87fc43bfae77556907d2297';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
      })(document);
    `
    document.head.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="smartsuppchat.com"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
