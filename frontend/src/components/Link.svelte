<script>
import { OpenBrowser } from "../../wailsjs/go/controllers/App.js";
import { onAccesibilityKeydown } from "../utils/accessibility.js";
/** @type {{href: any, ref: any, children?: import('svelte').Snippet}} */
let { href, ref, children } = $props();
</script>


<span 
    data-ref={ref} 
    onkeydown={onAccesibilityKeydown} 
    onclick={(event) => { event.preventDefault(); OpenBrowser(href); }} 
    role="button" 
    tabindex="0">
    {@render children?.()}
</span>