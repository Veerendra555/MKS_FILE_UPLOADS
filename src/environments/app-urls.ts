export const AppUrls = {
  // _baseUrl: 'http://localhost:3000/',
   _baseUrl: 'https://mks-fileuplods-app.herokuapp.com/',
  _adminModuleUrl:'',
};
   

export const actionUrl={
  //////////////Dashboard
   _dashboardCount:"dashboardCount",
  ////Admin Login
  _loginUrl:"admin/adminLogin",
  // _changePassword:"admin/updateAdminPasswordById",
/////Member Login
  _memberLoginUrl:"api/member/memberLogin",
  _addMember:"api/member/addMember",
  _getMember:"api/member/getMembers",
  _getRoleById:"api/member/getRoleById/",
  _getMemberById:"api/member/getMemberById/",
  _updateMember:"api/member/updateMember",
  _deleteMember :"api/member/deleteMemberById/",
  _updateMemberStatus:"api/member/changeStatus",
  _forgotPassword:"api/member/forgotPassword",
  _changePassword:"api/member/changePassword",


 ///Customer

   _getCustomer:"api/user/getUsers",
   _deleteCustomer :"api/user/deleteUserById/",
  _updateCustomerStatus:"api/user/changeStatus",


//////////////////////////////////Service

_getService:"api/service/getServices",
_getServiceByClientId:"api/service/getServiceByClientId/",
_addService:"api/service/addService",
_updateServiceStatus:"api/service/ServicetatusChange",
_deleteService:"api/service/deleteServiceById/",
_getServiceById:"api/service/getServiceById/",
_updateService:"api/service/updateServiceById/",


  ///////////////////// Service Type
  // _getAllService:"service/getAllServices/",
  // // _addService:"service/addService",
  // // _updateServiceStatus:"service/updateServiceStatus",
  // //  _deleteService :"service/deleteServices/",
  //  _getServiceById:"service/getServices/",
  //  _updateService:"service/updateService/",
 

/////////////////////////AddOns 

_getAllAddOnBySubId:"addOn/getAddOnBySubCatId/",
_addAddon:"addOn/addAddOn",
_updateAddonStatus:"addOn/updateAddOnStatusById",
_deleteAddon :"addOn/deleteAddOnById/",
_getAddonById:"addOn/getAddOnById/",
_updateAddon:"addOn/updateAddOnById/",

///////////////////////Users
_getAllUser:"user/allCustomers",
  _addUser:"user/addUser",
  _updateUserStatus:"user/updateUserStatus",
  _getUserById:"user/getUser/",
   _deleteUser :"user/deleteUser/",
   _UserById:"user/updateUser/",
   _UserAddNewAddress:"user/addNewAddresss/",
   _updateUser:"service/updateService/",
 

   ///////////////////////Partner
_getAllPartner:"partner/getAllPartners",
_addPartner:"partner/addPartner",
_updatePartnerStatus:"partner/updatePartnerStatus",
 _deletePartner :"partner/deletePartner/",
 _getPartnerById:"partner/getPartner/",
 _updatePartnerById:"partner/updatePartner/",
 _updatePartner:"partner/updateService/",
_getpartnersByCatId:"partner/getPartnerByCatId/",

   
///////////////////////////////////Orders

       _getOrders:"order/getOrder",
       _getOrderById:"order/getOrder/",
       _updateOrderStatus:"order/updateOrderStatus",
       _updateOrderActiveStatus:"order/updateOrderActiveStatus",
       _updateOrderById:"order/updatOrder/",
       _getOrdersByStatus:"order/getOrdersByStatus",
       _getCancelledOrders:"order/getCancelledOrders",

////////////////////////////////// Offers Banners

_getOfferbanner:"offerbanner/getofferbanners",
_addofferbanner:"offerbanner/addofferbanner",
_updateofferbannerStatus:"offerbanner/offerbannerStatusChange",
_deleteOfferBanner:"offerbanner/offerbannerDelete/",

///////////////////////////////// Ribbons
_getRibbon:"ribbon/getRibbon",
_addRibbon:"ribbon/addribbon",
_updateRibbonStatus:"ribbon/ribbonStatusChange",
_deleteRibbon:"ribbon/ribbonDelete/",

///////////////////////////////// Popup Banners
_getpopupBanner:"popupBanner/getpopupBanner",
_addpopupBanner:"popupBanner/addpopupBanner",
_updatpopupBanner:"popupBanner/popupBannerStatusChange",
_deletepopupBanner:"popupBanner/popupBannerDelete/",

////////////////////////////Add Order
_addOrder:"order/addOrder",


////////////////////////////Footer Details
_addFooterDetails:"footer/addFooterService",
_getFooterDetails:"footer/getAllFooterService",
_getFooterById:"footer/getFooterById/",
_updateFooterDetails:"footer/updateFooter",
_deleteFooterDetails:"footer/footerServiceDelete/",

}
   

