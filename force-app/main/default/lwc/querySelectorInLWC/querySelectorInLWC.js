import { LightningElement } from 'lwc';

export default class QuerySelectorInLWC extends LightningElement {
    usernames=["John","Mike","Kate","Kyle"];
    fetchDetailHandler()
    {
        const elem = this.template.querySelector('h1');
        elem.style.border="1px solid red";
        console.log(elem.innerText);
        const userElements = this.template.querySelectorAll('.name');
        //now userElements is not an array. Convert it into array by using Array.from and then run a loop over
        //it. In the next statement userElements becomes the array and item is basically each <div>
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
        });
    }
}