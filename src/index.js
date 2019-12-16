import './theme/fonts.sass';
import './theme/global.sass'
require('jquery-ui-bundle');
import './test.sass'

// Подключение всех SASS и js файлов из components
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}


requireAll(require.context('./components', true, /\.(sass)$/));
requireAll(require.context('./components', true, /\.(jsx?)$/));
requireAll(require.context('./pages', true, /\.(jsx?)$/));

