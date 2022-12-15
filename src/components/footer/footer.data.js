import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa';

export default [
  {
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    header: 'My Account',
    items: [
      {
        path: '/',
        label: 'Press inquiries',
      },
      {
        path: '/',
        label: 'Social media ',
      },
      {
        path: '/',
        label: 'directories',
      },
      {
        path: '/',
        label: 'Images & B-roll',
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: 'https://www.facebook.com/profile.php?id=100087045604368&is_tour_completed=true',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: 'https://www.linkedin.com/company/usbc-interiors-urban-science-building-contracting/',
        label: 'Linkedin',
        name: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        path: 'https://www.instagram.com/urbanscience_mep/',
        label: 'Instagram',
        name: 'instagram',
        icon: <FaInstagram />,
      },
      
    ],
  },
];
