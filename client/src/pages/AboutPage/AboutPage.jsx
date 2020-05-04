import React from 'react';
import styles from './AboutPage.module.css';
import image from './image.png'

class AboutPage extends React.Component {

    render() {

        return (
            <div className={styles.container}>
                <div className="row">
                    <div className="col-md-6 col-s-12 col-xs-12">
                        <img src={image} />
                        <h1>Meet Juan!</h1>

                    </div>
                    <div className="col-md-6 col-s-12 col-xs-12 aboutPara">
                        <p>
                            Hello from Boston, Massachusetts, USA!
                        </p>

                        <p>
                            I've been a coding away since I graduated my coding program.  Somehow, it just hasn't feel right
                            building apps that weren't making an impact during this <b style={{ color: "red" }}>global epidemic</b>.
                        </p>
                        <p>
                            Whether this app raises a bit of awareness or helps
                            someone somewhere make a more informed decison, I hope this tracker servers a greater purpose.
                        </p>
                        <p>
                            How would you improve this tracker?  I would love to know.
                            Feel free to drop me a line at juancodeatattime@gmail.com.
                        </p>
                        <p>
                            If you're a tech recruiter looking for talent, <a href="https://juancodeatatime.github.io/myPortfolio/">click here</a> to see my portfolio!

                        </p>I happen to be a <b style={{ color: "green" }}>full stack web developer</b> looking to
                        work for a great company.




                    </div>


                </div>


            </div >
        )
    }
}

export default AboutPage;