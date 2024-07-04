export function blobToBase64(blob: Blob, callback: (base64data?: string) => Promise<void>) {
  const reader = new FileReader()
  reader.onload = function () {
    const base64data = reader?.result?.toString().split(',')[1]
    callback(base64data)
  }
  reader.readAsDataURL(blob)
}
