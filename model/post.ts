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
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'authorId': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'status': PostStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'updatedAt'?: string;
}

export const PostStatusEnum = {
    UnderReview: 'under-review',
    Pending: 'pending',
    Planned: 'planned',
    Active: 'active',
    Done: 'done',
    Closed: 'closed'
} as const;

export type PostStatusEnum = typeof PostStatusEnum[keyof typeof PostStatusEnum];

