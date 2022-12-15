/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="startup landing logo" sx={style.logo}/>
    </Link>
  );
}


const style = {
  logo:{
    // width: '100%',
    height:["30px","70px"]
  }
}