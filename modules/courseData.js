module.exports = function getData(param) {
    let data;
    if (param === 'Progressive Web App') {
        data = {
            lecturer: ["Joost Faber", "Declan Rek"]
        };
        return data;
    } else if (param === 'Browser Technologies') {
        data = {
            lecturer: ["Peter-Paul koch", "Koop Reynders"]
        };
        return data;
    } else if (param === 'CSS To The Rescue') {
        data = {
            lecturer: ["Sanne 't Hooft", "Vasilis van Gemert"]
        };
        return data;
    } else if (param === 'Web App From Scratch') {
        data = {
            lecturer: ["Joost Faber", "Suus"]
        };
        return data;
    } else if (param === 'Real Time Web') {
        data = {
            lecturer: ["Justus", "Lukas"]
        };
        return data;
    } else if (param === 'Human Centred Design') {
        data = {
            lecturer: ["Vasilis van Gemert", "Koop Reynders"]
        };
        return data;
    } else if (param === 'Meesterproef') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    }
}