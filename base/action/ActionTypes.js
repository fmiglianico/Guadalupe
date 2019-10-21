export const getActionStatusFunction = function(name) {
    return (status) => (name + (status ? '_' + status : ''))
}

// Request statuses
export const PENDING = 'PENDING';
export const FULFILLED = 'FULFILLED';
export const REJECTED = 'REJECTED';

// App initialization
export const LOAD_ASYNC_RESOURCES = getActionStatusFunction('LOAD_ASYNC_RESOURCES');