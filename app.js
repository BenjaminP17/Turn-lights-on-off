console.log('tout va bien')

//Script Module


const app = {

    init : function () 
    
    {

            const btnElement = document.querySelector('#btn1');
            console.log(btnElement)
            btnElement.addEventListener('click', app.handleSwitchLights);
    },

    handleSwitchLights : function()
    
    {
        const blockLightElementLeft = document.querySelector('#bloc1');
        // blockLightElementLeft.classList.add('#lightON');
        blockLightElementLeft.style.backgroundColor="yellow";
    },
};

window.addEventListener('DOMContentLoaded',app.init);

// add comments ++