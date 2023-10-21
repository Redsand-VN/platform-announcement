import { post } from "../utils/fetcher.js";

export class WebhookConsumer {
  constructor(webhookUrl) {
    this.webhookUrl = webhookUrl;
  }

  send = async (announcement) => {
    
    let body = {
      "id": process.env.CHANEL_ID,
      "templateId": process.env.TEMPLATE_ID,
      params: {
        title: announcement.platform.toUpperCase() +" Update Api",
        content: announcement.title,
        link: announcement.url,
      },
    };
    const headers = {};
    return post(this.webhookUrl, headers, body)
      .then(console.log)
      .catch(console.warn);
  };
}
