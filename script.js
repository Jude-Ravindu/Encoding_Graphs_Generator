const bodyElement = document.getElementById('main_body');
const random_number = parseInt((Math.random()) * 3);
switch (random_number) {
    case 0:
        bodyElement.style.backgroundImage = 'url(img/backgound_img1.jpg)';
        break;
    case 1:
        bodyElement.style.backgroundImage = 'url(img/backgound_img2.jpg)';
        break;
    case 2:
        bodyElement.style.backgroundImage = 'url(img/backgound_img3.jpg)';
        break;
    default:
        break;
}  



function graphing() {
    const NRZ_graph_bucket = document.getElementById("NRZ_graph_lining_div");
    const NRZI_graph_bucket = document.getElementById("NRZI_graph_lining_div");
    const MENCHESTER_graph_bucket = document.getElementById("MENCHESTER_graph_lining_div");
    const input = document.getElementById("bit_input");
    const input_value = input.value;

    NRZ_graph_bucket.innerHTML = '';
    NRZI_graph_bucket.innerHTML = '';
    MENCHESTER_graph_bucket.innerHTML = '';

    let NRZ_previous_value = null;
    let NRZI_previous_status = null;
    let MENCHESTER_previous_status = null;

    const values = input_value.split('');

    var graphUnderSketchDiv = document.createElement('div');
    graphUnderSketchDiv.className = 'graph_under_sketch';
    var graphUnderSketchDiv2 = document.createElement('div');
    graphUnderSketchDiv2.className = 'graph_under_sketch';
    var graphUnderSketchDiv3 = document.createElement('div');
    graphUnderSketchDiv3.className = 'graph_under_sketch';


    let errorOccurred = values.some(value => {
        console.log("value");
        console.log(value);
        if (value === "1" || value === "0") {
            processInputValue(value);
        } else {
            return true; // Stops the loop
        }
    });

    if (errorOccurred) {
        alert("Wrong Inputs");
    }

    function processInputValue(value) {


        var graphUnderBoxDiv = document.createElement('div');
        graphUnderBoxDiv.className = 'graph_under_box';

        var childDiv = document.createElement('div');

        graphUnderBoxDiv.appendChild(childDiv);

        graphUnderSketchDiv.appendChild(graphUnderBoxDiv.cloneNode(true));
        graphUnderSketchDiv.appendChild(graphUnderBoxDiv);


        var graphUnderBoxDiv2 = document.createElement('div');
        graphUnderBoxDiv2.className = 'graph_under_box';

        var childDiv2 = document.createElement('div');

        graphUnderBoxDiv2.appendChild(childDiv2);

        graphUnderSketchDiv2.appendChild(graphUnderBoxDiv2);



        var graphUnderBoxDiv3 = document.createElement('div');
        graphUnderBoxDiv3.className = 'graph_under_box';

        var childDiv3 = document.createElement('div');

        graphUnderBoxDiv3.appendChild(childDiv3);

        graphUnderSketchDiv3.appendChild(graphUnderBoxDiv3);



        // NRZ Encoding
        let NRZ_graph_line_box = document.createElement('div');
        NRZ_graph_line_box.className = "graph_box";
        NRZ_graph_line_box.style.minWidth = "3.5rem";

        if (NRZ_previous_value !== null && NRZ_previous_value !== value) {
            NRZ_graph_line_box.style.borderLeft = "0.2rem solid var(--graph_line_color)";
        }

        if (value === "0") {
            NRZ_graph_line_box.style.borderTop = "0.2rem solid var(--graph_line_color)";
            NRZ_previous_value = "0";
        } else if (value === "1") {
            NRZ_graph_line_box.style.borderBottom = "0.2rem solid var(--graph_line_color)";
            NRZ_previous_value = "1";
        }
        NRZ_graph_bucket.appendChild(NRZ_graph_line_box);


        // NRZI Encoding
        let NRZI_graph_line_box = document.createElement('div');
        NRZI_graph_line_box.className = "graph_box";
        NRZI_graph_line_box.style.minWidth = "3.5rem";

        if (value == "1" && NRZI_previous_status !== null) {
            NRZI_graph_line_box.style.borderLeft = "0.2rem solid var(--graph_line_color)";
        }

        if (value === "0") {
            if (NRZI_previous_status == "bottom" || NRZI_previous_status == null) {
                NRZI_graph_line_box.style.borderBottom = "0.2rem solid var(--graph_line_color)";
                NRZI_previous_status = "bottom";
            } else if (NRZI_previous_status == "top") {
                NRZI_graph_line_box.style.borderTop = "0.2rem solid var(--graph_line_color)";
                NRZI_previous_status = "top";
            }
        } else if (value === "1") {
            if (NRZI_previous_status == "bottom" || NRZI_previous_status == null) {
                NRZI_graph_line_box.style.borderTop = "0.2rem solid var(--graph_line_color)";
                NRZI_previous_status = "top";
            } else if (NRZI_previous_status == "top") {
                NRZI_graph_line_box.style.borderBottom = "0.2rem solid var(--graph_line_color)";
                NRZI_previous_status = "bottom";
            }
        }

        NRZI_graph_bucket.appendChild(NRZI_graph_line_box);


        // Menchester Encoding
        let MENCHESTER_graph_line_box = document.createElement('div');
        MENCHESTER_graph_line_box.className = "graph_box";

        m_up_box = document.createElement('div');
        m_up_box.className = "graph_box_v_up_line";

        m_up_line1 = document.createElement('div');
        m_up_line1.className = "graph_box_v_up_line_1";

        m_up_line2 = document.createElement('div');
        m_up_line2.className = "graph_box_v_up_line_2";

        m_middle_line = document.createElement('div');
        m_middle_line.className = "graph_box_v_line";

        m_down_box = document.createElement('div');
        m_down_box.className = "graph_box_v_down_line";

        m_down_line1 = document.createElement('div');
        m_down_line1.className = "graph_box_v_down_line_1";

        m_down_line2 = document.createElement('div');
        m_down_line2.className = "graph_box_v_down_line_2";

        if (value === "1") {
            if (MENCHESTER_previous_status == "top") {
                MENCHESTER_graph_line_box.style.borderLeft = "0.2rem solid var(--graph_line_color)";
            }
            m_down_line1.style.backgroundColor = "var(--graph_line_color)"
            m_middle_line.style.backgroundColor = "var(--graph_line_color)"
            m_up_line2.style.backgroundColor = "var(--graph_line_color)"
            MENCHESTER_previous_status = "top";
        } else if (value === "0") {
            if (MENCHESTER_previous_status == "bottom") {
                MENCHESTER_graph_line_box.style.borderLeft = "0.2rem solid var(--graph_line_color)";
            }
            m_up_line1.style.backgroundColor = "var(--graph_line_color)"
            m_middle_line.style.backgroundColor = "var(--graph_line_color)"
            m_down_line2.style.backgroundColor = "var(--graph_line_color)"
            MENCHESTER_previous_status = "bottom";
        }

        m_up_box.appendChild(m_up_line1);
        m_up_box.appendChild(m_up_line2);
        m_down_box.appendChild(m_down_line1);
        m_down_box.appendChild(m_down_line2);
        MENCHESTER_graph_line_box.appendChild(m_up_box);
        MENCHESTER_graph_line_box.appendChild(m_middle_line);
        MENCHESTER_graph_line_box.appendChild(m_down_box);
        MENCHESTER_graph_line_box.style.width = "7rem";
        MENCHESTER_graph_line_box.style.minWidth = "7rem";

        MENCHESTER_graph_bucket.appendChild(MENCHESTER_graph_line_box);
    }

    MENCHESTER_graph_bucket.appendChild(graphUnderSketchDiv);
    NRZ_graph_bucket.appendChild(graphUnderSketchDiv2);
    NRZI_graph_bucket.appendChild(graphUnderSketchDiv3);
}