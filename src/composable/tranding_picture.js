import axios from "axios";
import { computed, ref } from "@vue/reactivity";
const trandingPicture = () => {
  const images_url = ref([]);
  const errors = null;

  const trandingPictureRequest = async (page = 1) => {
    await axios.get(`https://api.pexels.com/v1/curated?page=${page}&per_page=78`, {
      headers: {
        Authorization: '563492ad6f91700001000001e823c4c78f0f48699067a5ba9506f5e0',
        Accept: 'application/json',
      }
    }).then((response) => {
      images_url.value = response.data;
    })
  }
  return { trandingPictureRequest, images_url, errors };
}


export default trandingPicture;