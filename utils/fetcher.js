import https from "https";
import http from "http";

export default (url) => {
  var fetcher = http;
  if(url.startsWith("https://")){
    fetcher = https;
  }
  return new Promise((resolve, reject) => {
    fetcher
      .get(url, (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(error);
      });
      
  });
};

export const post = (url, headers, body) => {
  const data = JSON.stringify(body);
  var fetcher = http;
  if(url.startsWith("https://")){
    fetcher = https;
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(data),
      ...headers,
    },
  };

  return new Promise((resolve, reject) => {
    const req = fetcher
      .request(url, options, (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (error) => {
        reject(error);
      });

    req.write(data);
    req.end();
  });
};
