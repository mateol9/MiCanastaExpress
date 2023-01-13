import { useParams } from 'react-router';
import Detail from '../Detail/Detail';
import PayMethods from '../PayMethods/PayMethods';

const DetailPage = () => {
	const { productId } = useParams(); // Hay que traer los datos del mock y mandarlos a Detail

	return (
		<>
			<Detail />
			<PayMethods />
		</>
	);
};

export default DetailPage;
