// hàm show toast

function toast({type, title, message}){
    const toastContainer = document.getElementById('toast');

    if (toastContainer) {
        const icons = {
            info: 'fa-solid fa-circle-info',
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-triangle-exclamation'
        };
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">
                    ${title}
                </div>
                <div class="toast__message">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        toastContainer.appendChild(toast);

        // remove tự động toast

        const setTimeoutChecker = setTimeout(function(){
            toastContainer.removeChild(toast);
        },4000);

        // bấm btn để xóa toast

        toast.onclick = function(e) {
            if (e.target.closest(".toast__close")) {
                toastContainer.removeChild(toast);
                
                // clear hàm tự động remove toast toast
                
                clearInterval(setTimeoutChecker);
            }
        }
        
    }
};

// sự kiện click của từng button đối với từng modifier

function ShowInfoSuccess(){
    toast({
        type: 'success',
        title: 'Success',
        message: 'Success Message'
    })
}

function ShowInfoToast(){
    toast({
        type: 'info',
        title: 'Info',
        message: 'Info Message'
    })
}

function ShowInfoError(){
    toast({
        type: 'error',
        title: 'Error',
        message: 'Error Message'
    })
}