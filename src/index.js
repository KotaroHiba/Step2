import './theme/fonts.sass';
import './theme/global.sass'
import './test.sass'
// require('jquery-ui-bundle/jquery-ui.min.js');

// Подключение всех SASS и js файлов из components
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}


requireAll(require.context('./components', true, /\.(sass)$/));
requireAll(require.context('./components', true, /\.(jsx?)$/));
requireAll(require.context('./pages', true, /\.(jsx?)$/));

