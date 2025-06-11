 
import Breadcrumb from '../../common/Bredcrumb';
import Wrapper from '../../common/Wrapper';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import BrandsHomeThree from '../homes/home-3/BrandsHomeThree'; 
import GetInTouchHomeThree from '../homes/home-3/GetInTouchHomeThree';

const Contact = () => {
  return (
    <Wrapper>
    <div className="bg-dark">
      <HeaderOne />
      <Breadcrumb title="Contact" subtitle="Contact" /> 
      <GetInTouchHomeThree />
      <BrandsHomeThree />
      <FooterOne />
    </div>
    </Wrapper>
  );
};

export default Contact;