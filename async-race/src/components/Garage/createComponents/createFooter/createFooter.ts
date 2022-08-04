export function createFooter() {
  const body = document.querySelector<HTMLBodyElement>('body');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
    <a class="f-github" href="https://github.com/Sergey-98" target="_blank">
      Sergey-98
    </a>
    <p class="copyright">
      Copyright 2022
    </p>
    <a class="rsschool" href="https://rs.school/js/" target="_blank"></a>
  `;
  body?.append(footer);
}
