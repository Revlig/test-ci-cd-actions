export class App {
    private element: HTMLElement | null;
  
    constructor(elementId: string) {
      this.element = document.getElementById(elementId);
    }
  
    render(message: string = 'Bem vindo ao nosso site!'): void {
      if (this.element) {
        this.element.innerHTML = `<h1>${message}</h1>`;
      }
    }
  
    getElementContent(): string {
      return this.element?.innerHTML || '';
    }
  }