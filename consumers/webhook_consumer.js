import { post } from "../utils/fetcher.js";

export class WebhookConsumer {
  constructor(webhookUrl) {
    this.webhookUrl = webhookUrl;
  }

  send = async (announcement) => {
    
    let body = {
      "id": "oc_aa83061161511928e455c27065d9d94a",
      "templateId": "ctp_AAmY9fBDM3m1",
      params: {
        title: announcement.platform +" Update Api",
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
