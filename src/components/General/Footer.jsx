import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer =()=> {
    return(
        <footer className='dark-background foot'>
            <div>
                <h3>Por cualquier consulta no dudes en contactarnos!</h3>
                <div className='center'>
                    <ul >
                        <li><FacebookIcon color='secondary'/></li>
                        <li><EmailIcon color='secondary'/></li>
                        <li><InstagramIcon color='secondary'/></li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}

export default Footer