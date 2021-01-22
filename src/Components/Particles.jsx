import React from 'react';
import Particles from "react-particles-js";

// eslint-disable-next-line
export default () => (
    <div
        style={{
        width: "100%",
        height: "100%",
        }}
        >
        <Particles
            // Add window resize logic if required
            height={window.outerHeight}
            params={{
                particles: {
                number: {
                    value: 50
                },
                size: {
                    value: 3
                }
                },
                interactivity: {
                events: {
                    onhover: {
                    enable: true,
                    mode: "repulse"
                    }
                }
                }
            }}
        />
    </div>
);
