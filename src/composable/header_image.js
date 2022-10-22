import axios from "axios";
import { computed, ref } from "@vue/reactivity";
const headerImages = () => {
    const image = ref([]);
    const errors = null;

    const randomNumber = Math.floor(Math.random() * 10);

    const headerImagesRequest = async () => {
        await axios.get(`https://api.pexels.com/v1/search?page=${randomNumber}&query=people&orientation=landscape&per_page=1`, {
            headers: {
                Authorization: '563492ad6f91700001000001e823c4c78f0f48699067a5ba9506f5e0',
                Accept: 'application/json',
            }
        }).then((response) => {
            image.value = response.data.photos[0].src.landscape;
            console.log(response.data);
        })
    }
    const header_image = computed(() =>
        image.photos ? image.photos[0].src.landscape : null
    );
    return { headerImagesRequest, image, errors, header_image };
}


export default headerImages;