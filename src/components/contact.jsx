import style from '../styles/Contact.module.css';

const Contact = () => {
        
        return (
                <>
                  <p className={style.contact}>pgp: <a href="pgp.txt">vaul@vaul.xyz</a> <br></br>
                  fingerprint: <code>D043 08DD EEB6 80ED 8DDF 82F4 3FEE FF70 8CDD A5F8</code>
                  </p>
                </>
        )
}

export default Contact;
