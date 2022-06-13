import emailjs from '@emailjs/browser';

export const sendEmail = (form) =>{
    
     emailjs.sendForm('service_zz0jerb', 'template_2dez914', form, 'v1OyJ2xt4U93DF7JX')
                    .then((result)=>{
                         console.log('a mers')
                    },
                     (error) =>{
                        console.log('nu a mers')
                     })
}