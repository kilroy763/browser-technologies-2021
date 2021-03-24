module.exports = function getData(param) {
    let data;
    if (param === 'PWA') {
        data = {
            lecturer: ["Joost Faber", "Declan Rek"]
        };
        return data;
    } else if (param === 'Browser-Technologies') {
        data = {
            lecturer: ["Peter-Paul koch", "Koop Reynders"]
        };
        return data;
    } else if (param === 'CSS-to-the-rescue') {
        data = {
            lecturer: ["Sanne 't Hooft", "Vasilis van Gemert"]
        };
        return data;
    } else if (param === 'WAFS') {
        data = {
            lecturer: ["Joost Faber", "Suus"]
        };
        return data;
    } else if (param === 'Real-time-web') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    } else if (param === 'HCD') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    } else if (param === 'Meesterproef') {
        data = {
            lecturer: ["Docent_1", "Docent_2"]
        };
        return data;
    }
}