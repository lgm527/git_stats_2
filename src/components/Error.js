import { useLottie } from 'lottie-react';
import sadLaptop from '../Laptop/laptop.json';
import '../assets/Error.css';


function Error() {

    const options = {
        loop: true,
        autoplay: true,
        animationData: sadLaptop,
        height: 200,
        width: 200
    };

    const { View } = useLottie(options);

    return View;
}

export default Error;