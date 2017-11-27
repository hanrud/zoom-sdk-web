/**
 * Zoom Meeting namespace.
 * @namespace Zoommtg
 */

 /**
 * Success Callback
 * @callback Zoommtg~successCallback
 * @param {Object} res - Response Object
 * @param {string} res.method - API Method
 * @param {boolean} res.status - Status of call
 * @param {int} res.errorCode - Error Code
 * @param {string} res.errorMessage - Error message
 * @param {Object} res.result - Response result object
 */

 /**
 * Error Callback
 * @callback Zoommtg~errorCallback
 * @param {Object} res - Response Object
 * @param {string} res.method - API Method
 * @param {boolean} res.status - Status of call
 * @param {int} res.errorCode - Error Code
 * @param {string} res.errorMessage - Error message
 * @param {Object} res.result - Response result object
 */

 /**
 * Init Zoom Meeting
 * @function init
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} [params.debug=false] - Turn on debug mode can print log in browser console log
 * @param {string} params.leaveUrl - Post message page url after leave meeting, like “http://www.zoom.us”
 * @param {boolean} [params.showMeetingHeader=true] - Show or hide the meeting header, includes meeting number and topic
 * @param {boolean} [params.disableInvite=false] - Enable or disable invite function
 * @param {boolean} [params.disableCallOut=false] - Enable or disable call out function
 * @param {boolean} [params.disableRecord=false] - Enable or disable record function
 * @param {boolean} [params.disableJoinAudio=false] - Enable or disable join audio function
 * @param {boolean} [params.audioPanelAlwaysOpen=false] - Set the default state of the audio panel on join
 * @param {Zoommtg~successCallback} params.success - Call back function on success
 * @param {Zoommtg~errorCallback} params.error - Call back function on error
 */

 /**
 * Join Meeting
 * @function join
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {int} params.meetingNumber - Zoom meeting number
 * @param {string} params.userName - Display name in meeting
 * @param {string} params.passWord='' - Meeting password, if no password, set to ''
 * @param {string} params.apiKey - REST API Key
 * @param {string} params.signature - See {@tutorial signature} for a How-to
 * @param {string} params.participantId - set meeting participant ID
 * @example 
 * Zoommtg.join({
	meetingNumber: 123456789,
	userName: 'Zoomie Userton',
	password: '',
	apiKey: 'API_KEY',
	signature: 'SIGNATURE',
	participantId: 'UUID'
 });
 */

 /**
 * Show/Hide invite function
 * @function showInviteFunction
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} params.show
 * @example 
 * Zoommtg.showInviteFunction({
	show: false
 });
 */

 /**
 * Show/Hide meeting header
 * @function showMeetingHeader
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} params.show
 * @example 
 * Zoommtg.showMeetingHeader({
	show: false
 });
 */

 /**
 * Show/Hide record function
 * @function showRecordFunction
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} params.show
 * @example 
 * Zoommtg.showRecordFunction({
	show: false
 });
 */

 /**
 * Show/Hide call out function
 * @function showCalloutFunction
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} params.show
 * @example 
 * Zoommtg.showCalloutFunction({
	show: false
 });
 */

 /**
 * Show/Hide join audio function
 * @function showJoinAudioFunction
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} params.show
 * @example 
 * Zoommtg.showJoinAudioFunction({
	show: false
 });
 */

/**
 * Will not cover sharing content when set show as true
 * @function showPureSharingContent
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {boolean} params.show
 * @example
 * Zoommtg.showPureSharingContent({
	show: false
 });
 */

/**
 * Get current attendees list
 * @function getAttendeeslist
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @example
 * Zoommtg.getAttendeeslist({});
 */

 /**
 * The method will invite yourself to join meeting by phone
 * @function callOut
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {string} params.phoneNumber
 * @example 
 * Zoommtg.callOut({
	phoneNumber: '+18005551000'
 });
 */

/**
 * Get list of Zoom Rooms
 * @function getZoomRoomlist
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {Zoommtg~successCallback} params.success - Call back function on success
 * @example
 * Zoommtg.getZoomRoomlist({
 *   success: function (res) {
 *     console.log(res);
 *   }
 * });
 */


/**
 * Invite Zoom Room
 * @function inviteZoomRoom
 * @memberof Zoommtg
 * @instance
 * @param {Object} params
 * @param {string} params.zoomRoom - Zoom Room
 * @example
 * Zoommtg.inviteZoomRoom({
 *   zoomRoom: 'room'
 * });
 */
