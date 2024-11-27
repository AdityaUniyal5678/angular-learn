import { register } from 'node:module';

export const CONSTANTS = {
  currentYear: new Date().getFullYear(),

  header: {
    labels: {
      home: 'Home',
      about: 'About us',
      portfolio: 'Portfolio',
      contact: 'Contact Us',
      register: 'Register',
      login: 'Login',
    },
    buttons: {
      search: {
        type: 'button',
        label: 'Search',
        class: 'btn btn-outline-success',
      },
    },
  },
  footer: {
    labels: {
      name: 'Aditya Uniyal',
      project: 'Projects',
      experience: 'Experience',
      contact: 'Contact Us',
      phNo: '7302788712',
      address: 'Dehradun , Uttarakhand',
      email: 'adityauniyal5678@gmail.com',
      copyright: 'Copyright developed by Aditya Uniyal',
    },
  },
};
