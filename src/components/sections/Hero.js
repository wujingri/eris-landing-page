import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    }

    const outerClasses = classNames(
        'hero section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            The Best Auto-Staking & Auto-Compounding Protocol in Crypto
                        </h1>
                        <div className="split-wrap invert-mobile">
                            <div className="split-item">
                                <div className="split-item-content center-content-mobile reveal-from-bottom" data-reveal-container=".split-item">
                                    <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                        Lightning fast workflow
                                    </div>
                                    <h3 className="mt-0 mb-12">
                                        Data-driven insights
                                    </h3>
                                    <p className="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                    <div className="container-xs">
                                        <ul>
                                            <li>Highest Fixed APY – 102,483%</li>
                                            <li>First Automatic Staking and Compounding in Your Wallet!</li>
                                            <li>Get Rewards Every 30 Minutes / 48 Times Daily!</li>
                                        </ul>

                                        <div className="reveal-from-bottom" data-reveal-delay="600">
                                            <ButtonGroup>
                                                <div class="button-wrapper">
                                                    <div class="button-wrapspace">
                                                        <Button tag="a" color="primary" style="animation-bloom" wideMobile href="https://pancakeswap.finance/swap?outputCurrency=0xba96731324de188ebc1ed87ca74544ddebc07d7f">
                                                            <div></div>
                                                            <span>Buy $ERIS</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div class="button-wrapper">
                                                    <div class="button-wrapspace">
                                                        <Button tag="a" color="pink" style="animation-bloom" wideMobile href="https://docs.titano.finance/">
                                                            <div></div>
                                                            <span>White Paper</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                        <a
                            data-video="https://player.vimeo.com/video/174002812"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require('./../../assets/images/video-placeholder.jpg')}
                                alt="Hero"
                                width={896}
                                height={504} />
                        </a>
                    </div>
                    <Modal
                        id="video-modal"
                        show={videoModalActive}
                        handleClose={closeModal}
                        video="https://player.vimeo.com/video/174002812"
                        videoTag="iframe" />
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;