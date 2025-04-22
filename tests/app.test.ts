import { App } from '../src/app';

describe('App', () => {
  beforeEach(() => {
    // Configura um elemento DOM simulado para os testes
    document.body.innerHTML = '<div id="app"></div>';
  });

  test('should render "Bem vindo ao nosso site!" by default', () => {
    const app = new App('app');
    app.render();
    expect(app.getElementContent()).toContain('Bem vindo ao nosso site!');
  });

  test('should render custom message when provided', () => {
    const app = new App('app');
    const customMessage = 'Custom Message';
    app.render(customMessage);
    expect(app.getElementContent()).toContain(customMessage);
  });

  test('should not throw error when element does not exist', () => {
    const app = new App('non-existent-element');
    expect(() => app.render()).not.toThrow();
  });
});