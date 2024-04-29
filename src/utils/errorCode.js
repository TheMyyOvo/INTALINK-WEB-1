import i18n from "@/lang/index.js";

export default {
  '401': i18n.global.t('exportDefault.Authentication_failed'),
  '403': i18n.global.t('exportDefault.No_permission'),
  '404': i18n.global.t('exportDefault.Access_does_not_exist'),
  'default': i18n.global.t('exportDefault.Unknown_system_error'),

}

function menusTitle(item) {
  const hasKey = i18n.global.te('menus.' + item)
  if (hasKey) {
    return i18n.global.t('menus.' + item)}
}

