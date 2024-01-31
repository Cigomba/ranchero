<template>
    <div class="faq-container">
        <h1>Frequently Asked Questions</h1>
            <ul class="qa-container">
                <li>
                    <div class="question" id="q1" @mousedown="showAnswer($event, id)">
                        <i class="fa-solid fa-chevron-down"></i>
                        <p>What is Ranchero?</p>
                    </div>
                    <div class="answer">
                        <p>Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, ad perspiciatis nihil praesentium, soluta, necessitatibus porro velit modi rerum earum aspernatur odio vero qui provident fugiat expedita? qui blanditiis rerum enim natus laboriosam ipsum.</p>
                    </div>
                </li>
                <li>
                    <div class="question" id="q2" @mousedown="showAnswer($event, id)">
                        <i class="fa-solid fa-chevron-down"></i>
                        <p>Where are you located?</p>
                    </div>
                    <div class="answer">
                        <p>Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, ad perspiciatis nihil praesentium, soluta, necessitatibus porro velit modi rerum earum aspernatur odio vero qui provident fugiat expedita? Dignissimos ut impedit obcaecati esse cupiditate minus? Molestias voluptatibus nesciunt, deserunt praesentium, corporis aliquid autem commodi qui blanditiis rerum enim natus laboriosam ipsum.</p>
                    </div>
                </li>
                <li>
                    <div class="question" id="q3" @mousedown="showAnswer($event, id)">
                        <i class="fa-solid fa-chevron-down"></i>
                        <p>Can I hire you for custom work? </p>
                    </div>
                    <div class="answer">
                        <p>Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, ad perspiciatis nihil praesentium, soluta, necessitatibus porro velit modi rerum earum aspernatur odio vero qui provident fugiat expedita? Dignissimos ut impedit obcaecati esse cupiditate minus? Molestias voluptatibus nesciunt, deserunt praesentium, corporis aliquid autem commodi qui blanditiis rerum enim natus laboriosam ipsum.</p>
                    </div>
                </li>
                <li>
                    <div class="question" id="q4" @mousedown="showAnswer($event, id)">
                        <i class="fa-solid fa-chevron-down"></i>
                        <p>What is Ranchero</p>
                    </div>
                    <div class="answer">
                        <p>Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, ad perspiciatis nihil praesentium, soluta, necessitatibus porro velit modi rerum earum aspernatur odio vero qui provident fugiat expedita? Dignissimos ut impedit obcaecati esse cupiditate minus? Molestias voluptatibus nesciunt, deserunt praesentium, corporis aliquid autem commodi qui blanditiis rerum enim natus laboriosam ipsum.</p>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
// import { ref } from 'vue';

export default {
    data() {
        return {
            displayAnswer: false
        }
    },
    methods: {
        /* eslint-disable */
        showAnswer(e, id) {
            let chevron = e.target.parentNode.firstChild;

            if (chevron.classList.contains("question")) {
                chevron = e.target.firstChild;
            }
            
            let answer = chevron.parentNode.nextSibling

            
            if (chevron.classList.contains("fa-chevron-down")) {
                chevron.classList.remove("fa-chevron-down");
                chevron.classList.add("fa-chevron-up");
                
                answer.style.display = "flex";
                answer.style.transition = "display 0.3s ease"
                setTimeout(() => { answer.scrollTop = 10}, 0)
            }
            else {
                chevron.classList.remove("fa-chevron-up");
                chevron.classList.add("fa-chevron-down");
                
                answer.style.display = "none";
                answer.style.transition = "display 10s ease"
            }
        }
    },
    mounted() {

    }
}

</script>

<style scoped>
    .faq-container {
        margin: 80px 10%;
        /* margin-top: 80px; */
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .qa-container {
        display: flex;
        flex-direction: column;
        /* justify-content: left;
        align-items: left; */
        gap: 30px;
        /* margin: 0 auto; */
    }

    .question {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap: 15px;
    }

    .question:hover {
        cursor: pointer;
    }
    
    .answer {
        display: none;
        text-align: left;
        margin-left: 31px;
        transition: all 1s ease-in-out;
    }
    
    ul {
        list-style-type: none;
    }
    
    ul li {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

</style>