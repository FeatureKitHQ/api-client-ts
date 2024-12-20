/* tslint:disable */
/* eslint-disable */
/**
 * FeatureKit API
 * FeatureKit is a comprehensive feedback management platform designed for product teams to collect, organize, and act on user feedback.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@usefeaturekit.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * Refresh token is returned in a secure, HTTP-only cookie
 * @export
 * @interface UserAuthResponse
 */
export interface UserAuthResponse {
    /**
     * New JWT token issued by FeatureKit.
     * @type {string}
     * @memberof UserAuthResponse
     */
    'accessToken'?: string;
    /**
     * 
     * @type {User}
     * @memberof UserAuthResponse
     */
    'user'?: User;
}

