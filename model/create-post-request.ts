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



/**
 * 
 * @export
 * @interface CreatePostRequest
 */
export interface CreatePostRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    'authorId': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    'status'?: CreatePostRequestStatusEnum;
}

export const CreatePostRequestStatusEnum = {
    UnderReview: 'under-review',
    Pending: 'pending',
    Planned: 'planned',
    Active: 'active',
    Done: 'done',
    Closed: 'closed'
} as const;

export type CreatePostRequestStatusEnum = typeof CreatePostRequestStatusEnum[keyof typeof CreatePostRequestStatusEnum];


