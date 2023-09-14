const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

console.log($tabContainer);
console.log($tabList);
console.log($viewList);

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target && $tabList[i].className === 'tab') {
        $tabList[i].className = 'tab active';
      } else $tabList[i].className = 'tab';
      const dataView = event.target.getAttribute('data-view');
      for (let i = 0; i < $viewList.length; i++) {
        if ($viewList[i].getAttribute('data-view') === dataView) {
          $viewList[i].className = 'view';
        } else $viewList[i].className = 'view hidden';
      }
    }
  }
});
