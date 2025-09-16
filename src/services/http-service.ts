import apiClient from "./api-client";

// Item type
interface Item {
  id: number;
}

class HTTPService {
  _endpoint: string;
  constructor(endpoint: string) {
    this._endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this._endpoint, { signal: controller.signal });

    const cancel = () => {
      controller.abort();
    };

    return { cancel, request };
  }

  delete(id: number) {
    return apiClient.delete(this._endpoint + "/" + id);
  }

  add<T>(item: T) {
    return apiClient.post(this._endpoint, item);
  }

  update<T extends Item>(item: T) {
    return apiClient.patch(this._endpoint + "/" + item.id, item);
  }
}

export const create = (endpoint: string) => {
  return new HTTPService(endpoint);
};

//export default new HTTPService("/users");
