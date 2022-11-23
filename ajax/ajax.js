function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response)
      } else {
        reject(this.statusText)
      }
    }
    xhr.onerror = function() {
      reject(this.statusText)
    }
    xhr.setRequestHeader("Accept", "application/json")
    xhr.responseType = "json"
    xhr.send()
  })
}