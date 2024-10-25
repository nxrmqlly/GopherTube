
<script>
/** @type {{message?: string, detail?: string, onClose: any, id: any}} */
let { message = "", detail = "", onClose, id } = $props();

let isOpen = $state(false);

function toggle() {
	isOpen = !isOpen;
}

// Automatically close the toast after 3 seconds
setTimeout(() => {
	if (!isOpen) {
		onClose(id); // Pass the id when closing
	}
}, 3000);
</script>

<style>
.toast {
    margin: 0.1rem 0;
    background: #333;
    color: white;
    padding: 16px;
    border-radius: 8px;
    position: relative;
    transition: opacity 0.3s ease;
    max-width: 300px; /* Optional: set a max-width */
}

.detail {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.detail.open {
    max-height: 200px; /* Adjust as necessary to fit your content */
}

.collapse-button,
.close-button {
    margin: 0;
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    text-decoration: underline;
}

.close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 16px;
}
</style>


<div class="toast">
    <button class="close-button" onclick={() => onClose(id)}>✖</button>
    <div>{message}</div>
    <div class={`detail ${isOpen ? 'open' : ''}`}>
        {detail}
    </div>
    <button class="collapse-button" onclick={toggle}>{isOpen ? 'Collapse' : 'Expand'}</button>
</div>
