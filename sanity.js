import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

const client = createClient({

    projectId: "w1lc5ohr",
    dataset: "production",    
    apiVersion:"2021-03-25",
    useCdn:true,


});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;