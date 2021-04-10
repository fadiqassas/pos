import discount_amount from './discount_amount';
import set_batch_number from './set_batch_number';
import fix_syntax_error from './fix_syntax_error';
import rerender_fields from './rerender_fields';

export const controllerOverrides = [set_batch_number, fix_syntax_error];
export const cartOverrides = [discount_amount];
export const detailsOverrides = [rerender_fields];
