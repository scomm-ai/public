export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    let content, contentType;

    if (pathname === '/.well-known/apple-app-site-association') {
      content = JSON.stringify({
        applinks: {
          apps: [],
          details: [
            {
              appID: "WA7GC3J8GA.ai.scomm.mail",
              paths: ["/oauth2/*"]
            }
          ]
        }
      });
      contentType = 'application/json';
    } else if (pathname === '/.well-known/assetlinks.json') {
      content = JSON.stringify([
        {
          relation: ["delegate_permission/common.handle_all_urls"],
          target: {
            namespace: "android_app",
            package_name: "ai.scomm",
            sha256_cert_fingerprints: ["67:F3:76:0B:D4:D5:65:26:EE:66:9D:CC:59:D3:F1:D3:CF:B4:D9:84:3E:88:90:63:4C:EB:F8:E9:E8:34:EA:F2"]
          }
        }
      ]);
      contentType = 'application/json';
    } else {
      return new Response('Not Found', { status: 404 });
    }

    return new Response(content, {
      headers: { 'Content-Type': contentType }
    });
  }
};
