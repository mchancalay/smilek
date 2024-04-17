import TitleSection from '../TitleSection/TitleSection';
import { Container } from '@mui/material';

const AboutUs = () => {

    return (
        <div className='aU' id="aboutUs">
            <Container maxWidth="lg">
                <div className='aU__container'>
                    <TitleSection title={'About us'} subtitle={'banks = 💩'}></TitleSection>
                    <div className='aU__box'>
                        <div className='aU__text'>
                            <p>Welcome to the $SMILEK era! 🚀 Since launch, we've been the crypto crusade the digital age demanded, championing key finance values like decentralization & fund individualization.</p>
                            <p>This ain't just a token; it's the heart of a new tokenized ideology smashing old-school financial chains. 💥 $SMILEK laughs at banks, and invites you to join the giggle fest.  😂Ever felt chained by bank rules? Time to seize your financial destiny.</p>
                            <p>SMILEK is our independence declaration, handing power & control back to the peeps.  Our mission 🤝? To be a symbol of resistance & empower everyone to 'smile at the bank'. With $SMILEK, we're flipping the script, embracing a future where economic power is yours for the taking, no matter who you are. $SMILEK is more than tech; it's a disruptive force & a community thriving on teamwork and belonging. Join the $SMILEK movement & let's rewrite the rules together! </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs