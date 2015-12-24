import Backend from './backend/desktop';

const backend = new Backend();

backend.once('window-open', ({ app, window }) => {
  backend.logger.info('Backend ready!');
});
backend.open();
