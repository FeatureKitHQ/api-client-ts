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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CreateOrganizationRequest } from '../model';
// @ts-ignore
import type { Organization } from '../model';
/**
 * OrganizationsApi - axios parameter creator
 * @export
 */
export const OrganizationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new organization
         * @param {CreateOrganizationRequest} createOrganizationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganization: async (createOrganizationRequest: CreateOrganizationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createOrganizationRequest' is not null or undefined
            assertParamExists('createOrganization', 'createOrganizationRequest', createOrganizationRequest)
            const localVarPath = `/organizations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createOrganizationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of organizations that the user is a member of
         * @summary Get all organizations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllOrganizations: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/organizations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get organization details
         * @param {string} organizationId The ID of the organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrganization: async (organizationId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('getOrganization', 'organizationId', organizationId)
            const localVarPath = `/organizations/{organizationId}`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update organization details
         * @param {string} organizationId The ID of the organization
         * @param {Organization} organization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrganization: async (organizationId: string, organization: Organization, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationId' is not null or undefined
            assertParamExists('updateOrganization', 'organizationId', organizationId)
            // verify required parameter 'organization' is not null or undefined
            assertParamExists('updateOrganization', 'organization', organization)
            const localVarPath = `/organizations/{organizationId}`
                .replace(`{${"organizationId"}}`, encodeURIComponent(String(organizationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(organization, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizationsApi - functional programming interface
 * @export
 */
export const OrganizationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new organization
         * @param {CreateOrganizationRequest} createOrganizationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOrganization(createOrganizationRequest: CreateOrganizationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Organization>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOrganization(createOrganizationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrganizationsApi.createOrganization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of organizations that the user is a member of
         * @summary Get all organizations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllOrganizations(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Organization>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllOrganizations(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrganizationsApi.getAllOrganizations']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get organization details
         * @param {string} organizationId The ID of the organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrganization(organizationId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Organization>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrganization(organizationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrganizationsApi.getOrganization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update organization details
         * @param {string} organizationId The ID of the organization
         * @param {Organization} organization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOrganization(organizationId: string, organization: Organization, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Organization>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOrganization(organizationId, organization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrganizationsApi.updateOrganization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OrganizationsApi - factory interface
 * @export
 */
export const OrganizationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new organization
         * @param {CreateOrganizationRequest} createOrganizationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOrganization(createOrganizationRequest: CreateOrganizationRequest, options?: RawAxiosRequestConfig): AxiosPromise<Organization> {
            return localVarFp.createOrganization(createOrganizationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of organizations that the user is a member of
         * @summary Get all organizations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllOrganizations(options?: RawAxiosRequestConfig): AxiosPromise<Array<Organization>> {
            return localVarFp.getAllOrganizations(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get organization details
         * @param {string} organizationId The ID of the organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrganization(organizationId: string, options?: RawAxiosRequestConfig): AxiosPromise<Organization> {
            return localVarFp.getOrganization(organizationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update organization details
         * @param {string} organizationId The ID of the organization
         * @param {Organization} organization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOrganization(organizationId: string, organization: Organization, options?: RawAxiosRequestConfig): AxiosPromise<Organization> {
            return localVarFp.updateOrganization(organizationId, organization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizationsApi - object-oriented interface
 * @export
 * @class OrganizationsApi
 * @extends {BaseAPI}
 */
export class OrganizationsApi extends BaseAPI {
    /**
     * 
     * @summary Create a new organization
     * @param {CreateOrganizationRequest} createOrganizationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public createOrganization(createOrganizationRequest: CreateOrganizationRequest, options?: RawAxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).createOrganization(createOrganizationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of organizations that the user is a member of
     * @summary Get all organizations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public getAllOrganizations(options?: RawAxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).getAllOrganizations(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get organization details
     * @param {string} organizationId The ID of the organization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public getOrganization(organizationId: string, options?: RawAxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).getOrganization(organizationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update organization details
     * @param {string} organizationId The ID of the organization
     * @param {Organization} organization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApi
     */
    public updateOrganization(organizationId: string, organization: Organization, options?: RawAxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).updateOrganization(organizationId, organization, options).then((request) => request(this.axios, this.basePath));
    }
}

