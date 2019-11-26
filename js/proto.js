var pb = require("Protobuf");
json = {
    nested: {
        company: {
            nested: {
                streaming: {
                    nested: {
                        StreamingMediaInfo: {
                            fields: {
                                encryptionKey: {
                                    type: "string",
                                    id: 33
                                },
                                encryptionIv: {
                                    type: "string",
                                    id: 34
                                },
                                prefixUrl: {
                                    type: "string",
                                    id: 1
                                },
                                compositeUrl: {
                                    type: "string",
                                    id: 2
                                },
                                segmentCompositeUrl: {
                                    type: "string",
                                    id: 3
                                },
                                segmentPreviewCompositeUrl: {
                                    type: "string",
                                    id: 4
                                },
                                overlayUrl: {
                                    type: "string",
                                    id: 5
                                },
                                previewUrl: {
                                    type: "string",
                                    id: 6
                                },
                                previewWithOverlayUrl: {
                                    type: "string",
                                    id: 7
                                },
                                mediaUrl: {
                                    type: "string",
                                    id: 10
                                },
                                mediaSize: {
                                    type: "int64",
                                    id: 11
                                },
                                mediaEncSize: {
                                    type: "int64",
                                    id: 12
                                },
                                mediaVideoUrl: {
                                    type: "string",
                                    id: 20
                                },
                                mediaVideoSize: {
                                    type: "int64",
                                    id: 21
                                },
                                mediaEncVideoSize: {
                                    type: "int64",
                                    id: 31
                                },
                                mediaAudioUrl: {
                                    type: "string",
                                    id: 22
                                },
                                mediaAudioSize: {
                                    type: "int64",
                                    id: 23
                                },
                                mediaEncAudioSize: {
                                    type: "int64",
                                    id: 32
                                },
                                mediaVideoIndexSize: {
                                    type: "int64",
                                    id: 26
                                },
                                mediaVideoSegmentSize: {
                                    rule: "repeated",
                                    type: "int64",
                                    id: 27
                                },
                                mediaAudioIndexSize: {
                                    type: "int64",
                                    id: 28
                                },
                                mediaAudioSegmentSize: {
                                    rule: "repeated",
                                    type: "int64",
                                    id: 29
                                },
                                mediaM3u8Url: {
                                    type: "string",
                                    id: 30
                                },
                                muxedCompositeUrl: {
                                    type: "string",
                                    id: 50
                                },
                                mediaWithOverlayUrl: {
                                    type: "string",
                                    id: 61
                                },
                                mediaWithOverlayVideoSize: {
                                    type: "int64",
                                    id: 63
                                },
                                mediaWithOverlayEncVideoSize: {
                                    type: "int64",
                                    id: 64
                                },
                                mediaWidth: {
                                    type: "int32",
                                    id: 40
                                },
                                mediaHeight: {
                                    type: "int32",
                                    id: 41
                                },
                                mediaVideoFirstSegmentSize: {
                                    type: "int64",
                                    id: 24
                                },
                                mediaAudioFirstSegmentSize: {
                                    type: "int64",
                                    id: 25
                                },
                                mediaWithOverlaySize: {
                                    type: "int64",
                                    id: 62
                                }
                            }
                        }
                    }
                },
                storydoc: {
                    nested: {
                        StoryEnvelope: {
                            fields: {
                                componentTypeId: {
                                    type: "StoryComponentType",
                                    id: 1
                                },
                                componentTypeName: {
                                    type: "string",
                                    id: 2
                                },
                                componentBytes: {
                                    type: "bytes",
                                    id: 3
                                },
                                encrypted: {
                                    type: "bool",
                                    id: 4
                                }
                            }
                        },
                        StoryDoc: {
                            fields: {
                                id: {
                                    type: "ID",
                                    id: 3
                                },
                                envelope: {
                                    rule: "repeated",
                                    type: "StoryEnvelope",
                                    id: 2
                                }
                            },
                            nested: {
                                ID: {
                                    fields: {
                                        namespace: {
                                            type: "Namespace",
                                            id: 1
                                        },
                                        id: {
                                            type: "string",
                                            id: 2
                                        }
                                    },
                                    nested: {
                                        Namespace: {
                                            values: {
                                                UNSET: 0,
                                                DISCOVER_SERVICE: 1,
                                                STORY_CREATION_SERVICE: 2,
                                                STORY_CREATION_SERVICE_COMPAT: 3,
                                                HIGHLIGHTS_SERVICE: 4
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        StoryComponentType: {
                            values: {
                                STORY_BODY: 0,
                                VENDING: 1,
                                VISIBILITY: 2,
                                PERMITTED_USER_ACTIONS: 3,
                                GROUP_STORY_INFO: 4,
                                OUR_STORY_INFO: 5,
                                PROVENANCE: 6,
                                AD_PLACEMENT: 7,
                                CONTENT_TAGGING: 8,
                                SEGMENTS: 9,
                                EPISODE: 10,
                                CURATION: 11,
                                DEEPLINKS: 12,
                                PRO_STORY_INFO: 13,
                                MODERATION: 14,
                                VIDEO_TRACKS_INFO: 15,
                                SHOW_EXTRA: 16
                            }
                        },
                        Visibility: {
                            fields: {
                                isAvailable: {
                                    type: "bool",
                                    id: 1
                                },
                                startTime: {
                                    type: "int64",
                                    id: 2
                                },
                                endTime: {
                                    type: "int64",
                                    id: 4
                                },
                                languageWhitelist: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 8
                                },
                                geofenceIds: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 12
                                },
                                isEmployeeOnly: {
                                    type: "bool",
                                    id: 13
                                },
                                isTest: {
                                    type: "bool",
                                    id: 14
                                }
                            }
                        },
                        Episode: {
                            fields: {
                                episodeId: {
                                    type: "string",
                                    id: 1
                                },
                                episodeNumber: {
                                    type: "int32",
                                    id: 4
                                },
                                seasonId: {
                                    type: "string",
                                    id: 5
                                },
                                seasonNumber: {
                                    type: "int32",
                                    id: 6
                                },
                                showId: {
                                    type: "string",
                                    id: 7
                                },
                                showType: {
                                    type: "impala.ShowType",
                                    id: 8
                                }
                            }
                        },
                        Vending: {
                            fields: {
                                vendingVersion: {
                                    type: "string",
                                    id: 2
                                },
                                firstPublishedAtMs: {
                                    type: "int64",
                                    id: 4
                                },
                                lastPublishedAtMs: {
                                    type: "int64",
                                    id: 5
                                },
                                lastNewsVersionUpdateMs: {
                                    type: "int64",
                                    id: 6
                                },
                                newsVersion: {
                                    type: "int64",
                                    id: 7
                                },
                                isLatestStoryForOwner: {
                                    type: "bool",
                                    id: 8
                                }
                            }
                        },
                        Deeplinks: {
                            fields: {
                                defaultDeeplink: {
                                    type: "Deeplink",
                                    id: 1
                                }
                            },
                            nested: {
                                Deeplink: {
                                    fields: {
                                        canonicalUrl: {
                                            type: "string",
                                            id: 1
                                        },
                                        videocodeWebUrl: {
                                            type: "string",
                                            id: 2
                                        },
                                        webStoryUrl: {
                                            type: "string",
                                            id: 3
                                        }
                                    }
                                }
                            }
                        },
                        PermittedUserActions: {
                            fields: {
                                shareOption: {
                                    type: "ShareOption",
                                    id: 3
                                }
                            },
                            nested: {
                                ShareOption: {
                                    values: {
                                        NO_SHARE: 0,
                                        SHARE_AVAILABLE: 1
                                    }
                                }
                            }
                        },
                        StoryBody: {
                            fields: {
                                video: {
                                    rule: "repeated",
                                    type: "company.videodoc.VideoDoc",
                                    id: 1
                                },
                                entryPoints: {
                                    rule: "repeated",
                                    type: "EntryPoint",
                                    id: 2
                                }
                            },
                            nested: {
                                EntryPoint: {
                                    fields: {
                                        segmentId: {
                                            type: "string",
                                            id: 3
                                        },
                                        tile: {
                                            rule: "repeated",
                                            type: "Tile",
                                            id: 2
                                        }
                                    },
                                    nested: {
                                        Tile: {
                                            fields: {
                                                id: {
                                                    type: "string",
                                                    id: 5
                                                },
                                                title: {
                                                    type: "string",
                                                    id: 1
                                                },
                                                tileImage: {
                                                    type: "TileImage",
                                                    id: 2
                                                },
                                                tileVideo: {
                                                    type: "TileVideo",
                                                    id: 3
                                                },
                                                tileBitmojiImage: {
                                                    type: "TileBitmojiImage",
                                                    id: 7
                                                },
                                                logo: {
                                                    type: "Logo",
                                                    id: 4
                                                },
                                                gradientColor: {
                                                    type: "string",
                                                    id: 6
                                                },
                                                subtitle: {
                                                    type: "string",
                                                    id: 10
                                                }
                                            },
                                            nested: {
                                                TileImage: {
                                                    fields: {
                                                        url: {
                                                            type: "string",
                                                            id: 1
                                                        }
                                                    }
                                                },
                                                TileVideo: {
                                                    fields: {
                                                        url: {
                                                            type: "string",
                                                            id: 1
                                                        },
                                                        thumbnailUrl: {
                                                            type: "string",
                                                            id: 2
                                                        }
                                                    }
                                                },
                                                TileBitmojiImage: {
                                                    fields: {
                                                        templateId: {
                                                            type: "string",
                                                            id: 1
                                                        },
                                                        url: {
                                                            type: "string",
                                                            id: 2
                                                        }
                                                    }
                                                },
                                                Logo: {
                                                    fields: {
                                                        logoUrl: {
                                                            type: "string",
                                                            id: 1
                                                        },
                                                        position: {
                                                            type: "LogoPosition",
                                                            id: 2
                                                        }
                                                    },
                                                    nested: {
                                                        LogoPosition: {
                                                            values: {
                                                                LOGO_POSITION_TOP: 0,
                                                                LOGO_POSITION_MIDDLE: 1,
                                                                LOGO_POSITION_BOTTOM: 2,
                                                                LOGO_POSITION_OFF: 3
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        AdPlacement: {
                            fields: {
                                adSetting: {
                                    type: "AdSetting",
                                    id: 3
                                }
                            },
                            nested: {
                                TargetingParams: {
                                    fields: {
                                        position: {
                                            type: "string",
                                            id: 1
                                        },
                                        edition: {
                                            type: "string",
                                            id: 2
                                        },
                                        inventory: {
                                            type: "string",
                                            id: 3
                                        },
                                        inventoryType: {
                                            type: "string",
                                            id: 4
                                        },
                                        inventoryFullyQualified: {
                                            type: "string",
                                            id: 5
                                        },
                                        productType: {
                                            type: "string",
                                            id: 6
                                        },
                                        channelTypeV2: {
                                            type: "string",
                                            id: 7
                                        },
                                        channelType: {
                                            type: "string",
                                            id: 8
                                        },
                                        publisher: {
                                            type: "string",
                                            id: 9
                                        }
                                    }
                                },
                                FixedAdSlot: {
                                    fields: {
                                        index: {
                                            type: "uint32",
                                            id: 1
                                        },
                                        targetingParams: {
                                            type: "TargetingParams",
                                            id: 2
                                        }
                                    }
                                },
                                FixedAdSlots: {
                                    fields: {}
                                },
                                AdPlacementMetadata: {
                                    fields: {
                                        adUnitId: {
                                            type: "string",
                                            id: 1
                                        },
                                        adInsertionConfig: {
                                            type: "AdInsertionConfig",
                                            id: 2
                                        },
                                        adRequestConfig: {
                                            type: "AdRequestConfig",
                                            id: 3
                                        },
                                        targetingParameters: {
                                            type: "TargetingParameters",
                                            id: 4
                                        },
                                        adCannotFollowVideoIds: {
                                            rule: "repeated",
                                            type: "string",
                                            id: 5
                                        },
                                        enableFullView: {
                                            type: "bool",
                                            id: 6
                                        }
                                    },
                                    nested: {
                                        AdInsertionConfig: {
                                            fields: {
                                                firstOnStart: {
                                                    type: "uint32",
                                                    id: 1
                                                },
                                                firstOnResume: {
                                                    type: "uint32",
                                                    id: 2
                                                },
                                                interval: {
                                                    type: "uint32",
                                                    id: 3
                                                },
                                                minVideosAfterAd: {
                                                    type: "uint32",
                                                    id: 4
                                                }
                                            }
                                        },
                                        AdRequestConfig: {
                                            fields: {
                                                firstPosition: {
                                                    type: "uint32",
                                                    id: 1
                                                },
                                                timeout: {
                                                    type: "uint32",
                                                    id: 2
                                                },
                                                minimumRemaining: {
                                                    type: "uint32",
                                                    id: 3
                                                }
                                            }
                                        },
                                        TargetingParameters: {
                                            fields: {
                                                channelId: {
                                                    type: "string",
                                                    id: 1
                                                },
                                                channelType: {
                                                    type: "string",
                                                    id: 2
                                                },
                                                channelTypeV2: {
                                                    type: "string",
                                                    id: 3
                                                },
                                                inventoryType: {
                                                    type: "string",
                                                    id: 4
                                                },
                                                inventoryFullyQualified: {
                                                    type: "string",
                                                    id: 5
                                                },
                                                inventory: {
                                                    type: "string",
                                                    id: 6
                                                },
                                                genre: {
                                                    type: "string",
                                                    id: 7
                                                }
                                            }
                                        }
                                    }
                                },
                                AdSetting: {
                                    values: {
                                        SKIPPABLE: 0,
                                        NON_SKIPPABLE: 1
                                    }
                                }
                            }
                        }
                    }
                },
                context: {
                    nested: {
                        ContextField: {
                            fields: {
                                name: {
                                    type: "string",
                                    id: 1
                                },
                                value: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        ContentMetadata: {
                            fields: {
                                taggedUserIds: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 21
                                },
                                taggedNames: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 22
                                }
                            }
                        },
                        ContextHint: {
                            fields: {
                                contextClientInfo: {
                                    type: "company.context2.api.ContextClientInfo",
                                    id: 11
                                },
                                unencryptedClientInfo: {
                                    type: "company.context2.api.ContextClientInfo",
                                    id: 12
                                },
                                hint: {
                                    type: "Hint",
                                    id: 1
                                },
                                timestamp: {
                                    type: "int64",
                                    id: 2
                                },
                                affordance: {
                                    type: "Affordance",
                                    id: 3
                                },
                                contentMetadata: {
                                    type: "ContentMetadata",
                                    id: 4
                                },
                                moreContext: {
                                    rule: "repeated",
                                    type: "ContextField",
                                    id: 10
                                }
                            },
                            nested: {
                                Hint: {
                                    values: {
                                        AUTO: 0,
                                        ON: 1,
                                        OFF: 2
                                    }
                                }
                            }
                        },
                        Affordance: {
                            fields: {
                                textKey: {
                                    type: "sint32",
                                    id: 11
                                }
                            }
                        },
                        AttributionInfo: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                },
                                displayName: {
                                    type: "string",
                                    id: 2
                                },
                                username: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        StoryManifest: {
                            fields: {
                                id: {
                                    type: "string",
                                    id: 1
                                },
                                version: {
                                    type: "string",
                                    id: 2
                                },
                                title: {
                                    type: "LocalizedStringSet",
                                    id: 11
                                },
                                unviewedThumbnailUrl: {
                                    type: "string",
                                    id: 4
                                },
                                viewedThumbnailUrl: {
                                    type: "string",
                                    id: 5
                                },
                                tileUrls: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 6
                                },
                                sunriseTimestamp: {
                                    type: "int64",
                                    id: 7
                                },
                                sunsetTimestamp: {
                                    type: "int64",
                                    id: 8
                                },
                                totalDuration: {
                                    type: "double",
                                    id: 9
                                },
                                totalCount: {
                                    type: "int32",
                                    id: 10
                                },
                                elements: {
                                    rule: "repeated",
                                    type: "StoryElement",
                                    id: 100
                                },
                                defaultPressAndHoldAction: {
                                    type: "UserAction",
                                    id: 200
                                },
                                ineligibleResults: {
                                    rule: "repeated",
                                    type: "StoryElement",
                                    id: 300
                                },
                                displayName: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        StoryElementDebug: {
                            fields: {
                                attributes: {
                                    keyType: "string",
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        ContentType: {
                            values: {
                                CONTENT_TYPE_SNAP: 0,
                                CONTENT_TYPE_VIDEO: 1,
                                CONTENT_TYPE_IMAGE: 2,
                                CONTENT_TYPE_WEB_URL: 3,
                                CONTENT_TYPE_HTML: 4,
                                CONTENT_TYPE_EXPLORER: 5,
                                CONTENT_TYPE_SEARCH: 6,
                                CONTENT_TYPE_THREE_VI: 7
                            }
                        },
                        UserAction: {
                            fields: {
                                elementId: {
                                    type: "string",
                                    id: 1
                                },
                                displayText: {
                                    type: "string",
                                    id: 2
                                },
                                actionType: {
                                    type: "ActionType",
                                    id: 3
                                },
                                shouldPrefetchOnPrev: {
                                    type: "bool",
                                    id: 10
                                },
                                allowAd: {
                                    type: "bool",
                                    id: 20
                                }
                            }
                        },
                        LocalizedStringSet: {
                            fields: {
                                strings: {
                                    rule: "repeated",
                                    type: "String",
                                    id: 2
                                },
                                fallback: {
                                    type: "string",
                                    id: 1
                                }
                            },
                            nested: {
                                String: {
                                    fields: {
                                        locale: {
                                            type: "string",
                                            id: 1
                                        },
                                        text: {
                                            type: "string",
                                            id: 2
                                        }
                                    }
                                }
                            }
                        },
                        StoryElementMetrics: {
                            fields: {
                                lastUpdateTimestampMs: {
                                    type: "int64",
                                    id: 1
                                },
                                reach: {
                                    type: "google.protobuf.Int32Value",
                                    id: 4
                                },
                                screenshots: {
                                    type: "google.protobuf.Int32Value",
                                    id: 5
                                },
                                additionalDetailsLink: {
                                    type: "serengeti.Link",
                                    id: 101
                                },
                                viewCount: {
                                    type: "int32",
                                    id: 2
                                },
                                screenshotCount: {
                                    type: "int32",
                                    id: 3
                                },
                                additionalDetailsUrl: {
                                    type: "string",
                                    id: 100
                                }
                            }
                        },
                        DeleteAction: {
                            values: {
                                NONE: 0,
                                DELETE: 1,
                                ARCHIVE: 2
                            }
                        },
                        StoryElement: {
                            fields: {
                                id: {
                                    type: "string",
                                    id: 1
                                },
                                version: {
                                    type: "int32",
                                    id: 2
                                },
                                contentType: {
                                    type: "ContentType",
                                    id: 3
                                },
                                duration: {
                                    type: "double",
                                    id: 10
                                },
                                timestamp: {
                                    type: "int64",
                                    id: 11
                                },
                                sssId: {
                                    type: "string",
                                    id: 12
                                },
                                captureTimestamp: {
                                    type: "int64",
                                    id: 13
                                },
                                sunriseTimestamp: {
                                    type: "int64",
                                    id: 4
                                },
                                sunsetTimestamp: {
                                    type: "int64",
                                    id: 5
                                },
                                videoInfo: {
                                    type: "VideoInfo",
                                    id: 6
                                },
                                webMediaInfo: {
                                    type: "WebMediaInfo",
                                    id: 7
                                },
                                htmlInfo: {
                                    type: "HtmlInfo",
                                    id: 8
                                },
                                loop: {
                                    type: "bool",
                                    id: 40
                                },
                                attributionInfo: {
                                    type: "AttributionInfo",
                                    id: 41
                                },
                                previewUrl: {
                                    type: "string",
                                    id: 42
                                },
                                deleteAction: {
                                    type: "DeleteAction",
                                    id: 47
                                },
                                isSaveable: {
                                    type: "bool",
                                    id: 44
                                },
                                isReportable: {
                                    type: "bool",
                                    id: 45
                                },
                                needsModeration: {
                                    type: "bool",
                                    id: 46
                                },
                                minimumDurationMs: {
                                    type: "int32",
                                    id: 100
                                },
                                tapAction: {
                                    type: "UserAction",
                                    id: 101
                                },
                                swipeUpAction: {
                                    type: "UserAction",
                                    id: 102
                                },
                                swipeLeftAction: {
                                    type: "UserAction",
                                    id: 103
                                },
                                pressAndHoldAction: {
                                    type: "UserAction",
                                    id: 104
                                },
                                swipeRightAction: {
                                    type: "UserAction",
                                    id: 105
                                },
                                swipeDownAction: {
                                    type: "UserAction",
                                    id: 106
                                },
                                shouldPrefetch: {
                                    type: "bool",
                                    id: 200
                                },
                                prefetchTtlMs: {
                                    type: "int32",
                                    id: 201
                                },
                                metrics: {
                                    type: "StoryElementMetrics",
                                    id: 400
                                },
                                debugInfo: {
                                    type: "StoryElementDebug",
                                    id: 500
                                },
                                isDeletable: {
                                    type: "bool",
                                    id: 43
                                }
                            },
                            nested: {
                                VideoInfo: {
                                    fields: {
                                        videoMediaId: {
                                            type: "string",
                                            id: 1
                                        },
                                        videoMediaType: {
                                            type: "VideoMediaType",
                                            id: 2
                                        },
                                        creatorId: {
                                            type: "string",
                                            id: 3
                                        },
                                        mediaKey: {
                                            type: "string",
                                            id: 4
                                        },
                                        mediaIv: {
                                            type: "string",
                                            id: 5
                                        },
                                        mediaUrl: {
                                            type: "string",
                                            id: 6
                                        },
                                        isZipped: {
                                            type: "bool",
                                            id: 7
                                        },
                                        title: {
                                            type: "LocalizedStringSet",
                                            id: 11
                                        },
                                        localitySubtitle: {
                                            type: "LocalizedStringSet",
                                            id: 14
                                        },
                                        streamingMediaInfo: {
                                            type: "company.streaming.StreamingMediaInfo",
                                            id: 15
                                        },
                                        suppressContext: {
                                            type: "bool",
                                            id: 16
                                        },
                                        contextHint: {
                                            type: "company.context.ContextHint",
                                            id: 17
                                        },
                                        venueId: {
                                            type: "string",
                                            id: 12
                                        },
                                        attachmentUrl: {
                                            type: "string",
                                            id: 19
                                        },
                                        overlayText: {
                                            type: "string",
                                            id: 21
                                        },
                                        unlockablesVideoInfo: {
                                            type: "string",
                                            id: 22
                                        },
                                        source: {
                                            type: "Source",
                                            id: 23
                                        },
                                        hasLensMetadata: {
                                            type: "bool",
                                            id: 25
                                        }
                                    },
                                    nested: {
                                        Source: {
                                            values: {
                                                UNKNOWN: 0,
                                                CAMERA_ROLL: 1,
                                                MEMORIES: 2
                                            }
                                        },
                                        TitleForZoom: {
                                            fields: {
                                                maxZoom: {
                                                    type: "double",
                                                    id: 1
                                                },
                                                title: {
                                                    type: "string",
                                                    id: 2
                                                }
                                            }
                                        }
                                    }
                                },
                                WebMediaInfo: {
                                    fields: {
                                        contentUrl: {
                                            type: "string",
                                            id: 1
                                        },
                                        durationMs: {
                                            type: "int32",
                                            id: 2
                                        }
                                    }
                                },
                                HtmlInfo: {
                                    fields: {
                                        html: {
                                            type: "string",
                                            id: 1
                                        }
                                    }
                                }
                            }
                        },
                        ActionType: {
                            values: {
                                ACTION_TYPE_ELEMENT: 0,
                                ACTION_TYPE_DISMISS: 1,
                                ACTION_TYPE_BACK: 2
                            }
                        },
                        VideoMediaType: {
                            values: {
                                SNAP_MEDIA_TYPE_IMAGE: 0,
                                SNAP_MEDIA_TYPE_VIDEO: 1,
                                SNAP_MEDIA_TYPE_VIDEO_NO_SOUND: 2,
                                SNAP_MEDIA_TYPE_FRIEND: 3,
                                SNAP_MEDIA_TYPE_BLOB: 4,
                                SNAP_MEDIA_TYPE_LAGUNA: 5,
                                SNAP_MEDIA_TYPE_LAGUNA_NO_SOUND: 6,
                                SNAP_MEDIA_TYPE_AUDIO_STITCH: 9,
                                SNAP_MEDIA_TYPE_PSYCHOMANTIS: 10,
                                SNAP_MEDIA_TYPE_SCREAMINGMANTIS: 11,
                                SNAP_MEDIA_TYPE_VIDEO_SOUND_MALIBU: 12,
                                SNAP_MEDIA_TYPE_VIDEO_NO_SOUND_MALIBU: 13,
                                SNAP_MEDIA_TYPE_VIDEO_SOUND_LAGUNA_HD: 14,
                                SNAP_MEDIA_TYPE_VIDEO_NO_SOUND_LAGUNA_HD: 15,
                                SNAP_MEDIA_TYPE_GHOSTMANTIS: 16,
                                SNAP_MEDIA_TYPE_VIDEO_SOUND_NEWPORT: 17,
                                SNAP_MEDIA_TYPE_VIDEO_NO_SOUND_NEWPORT: 18
                            }
                        }
                    }
                },
                geo: {},
                tags: {},
                core: {
                    nested: {
                        UUID: {
                            fields: {
                                highBits: {
                                    type: "fixed64",
                                    id: 1
                                },
                                lowBits: {
                                    type: "fixed64",
                                    id: 2
                                }
                            }
                        }
                    }
                },
                topics: {
                    nested: {
                        TopicSticker: {
                            fields: {
                                topicId: {
                                    type: "company.core.UUID",
                                    id: 1
                                },
                                stickerText: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        }
                    }
                },
                context2: {
                    nested: {
                        api: {
                            nested: {
                                ContextClientInfo: {
                                    fields: {
                                        mentionedUsernames: {
                                            rule: "repeated",
                                            type: "string",
                                            id: 1
                                        },
                                        mentionedUserIds: {
                                            rule: "repeated",
                                            type: "company.core.UUID",
                                            id: 2
                                        },
                                        groupInvites: {
                                            rule: "repeated",
                                            type: "GroupInviteInfo",
                                            id: 3
                                        },
                                        videoReplyRequests: {
                                            rule: "repeated",
                                            type: "VideoReplyRequestInfo",
                                            id: 4
                                        },
                                        gameIds: {
                                            rule: "repeated",
                                            type: "company.core.UUID",
                                            id: 5
                                        },
                                        storyInvites: {
                                            rule: "repeated",
                                            type: "PrivateStoryInviteInfo",
                                            id: 6
                                        },
                                        publisherId: {
                                            type: "int64",
                                            id: 7
                                        },
                                        attachedTopicStickers: {
                                            rule: "repeated",
                                            type: "TopicStickerInfo",
                                            id: 8
                                        },
                                        mentionSources: {
                                            rule: "repeated",
                                            type: "MentionSource",
                                            id: 9
                                        }
                                    },
                                    nested: {
                                        GroupInviteInfo: {
                                            fields: {
                                                groupId: {
                                                    type: "company.core.UUID",
                                                    id: 1
                                                },
                                                groupInviteId: {
                                                    type: "company.core.UUID",
                                                    id: 2
                                                },
                                                encryptedGroupInviteId: {
                                                    type: "string",
                                                    id: 3
                                                }
                                            }
                                        },
                                        VideoReplyRequestInfo: {
                                            fields: {
                                                requestText: {
                                                    type: "string",
                                                    id: 1
                                                },
                                                requestId: {
                                                    type: "company.core.UUID",
                                                    id: 2
                                                },
                                                storyId: {
                                                    type: "company.core.UUID",
                                                    id: 3
                                                }
                                            }
                                        },
                                        PrivateStoryInviteInfo: {
                                            fields: {
                                                storyId: {
                                                    type: "company.core.UUID",
                                                    id: 1
                                                },
                                                storyName: {
                                                    type: "string",
                                                    id: 2
                                                },
                                                inviteId: {
                                                    type: "company.core.UUID",
                                                    id: 3
                                                }
                                            }
                                        },
                                        TopicStickerInfo: {
                                            fields: {
                                                topicSticker: {
                                                    type: "company.topics.TopicSticker",
                                                    id: 1
                                                }
                                            }
                                        },
                                        MentionSource: {
                                            values: {
                                                CAPTION_TAG: 0,
                                                MENTION_STICKER: 1,
                                                SNAPCODE_STICKER: 2
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                search: {
                    nested: {
                        Ordering: {
                            values: {
                                NOT_SPECIFIED: 0,
                                POPULARITY: 1,
                                RECENCY: 2
                            }
                        },
                        ThumbnailSequence: {
                            fields: {
                                urlPattern: {
                                    type: "string",
                                    id: 1
                                },
                                numThumbnails: {
                                    type: "int32",
                                    id: 2
                                },
                                animationIntervalMs: {
                                    type: "int32",
                                    id: 3
                                }
                            }
                        },
                        LensRequest: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                },
                                businessProfileId: {
                                    type: "string",
                                    id: 2
                                },
                                queryStr: {
                                    type: "string",
                                    id: 3
                                },
                                userInfo: {
                                    type: "LensRequestUserInfo",
                                    id: 9
                                },
                                returnOrganic: {
                                    type: "bool",
                                    id: 10
                                },
                                order: {
                                    type: "Ordering",
                                    id: 4
                                },
                                maxCount: {
                                    type: "int32",
                                    id: 5
                                },
                                resultStartIndex: {
                                    type: "int32",
                                    id: 8
                                }
                            }
                        },
                        LensResponse: {
                            fields: {
                                lenses: {
                                    rule: "repeated",
                                    type: "LensMetadata",
                                    id: 1
                                },
                                hasMoreResults: {
                                    type: "bool",
                                    id: 2
                                },
                                nextStartIndex: {
                                    type: "int32",
                                    id: 3
                                }
                            }
                        },
                        LensMetadata: {
                            fields: {
                                lensId: {
                                    type: "string",
                                    id: 1
                                },
                                creatorName: {
                                    type: "string",
                                    id: 12
                                },
                                userId: {
                                    type: "string",
                                    id: 2
                                },
                                businessProfileId: {
                                    type: "string",
                                    id: 3
                                },
                                name: {
                                    type: "string",
                                    id: 4
                                },
                                lastUpdatedEpoch: {
                                    type: "int32",
                                    id: 5
                                },
                                thumbnailUrl: {
                                    type: "string",
                                    id: 6
                                },
                                thumbnailSequence: {
                                    type: "ThumbnailSequence",
                                    id: 7
                                },
                                iconUrl: {
                                    type: "string",
                                    id: 8
                                },
                                deeplinkUrl: {
                                    type: "string",
                                    id: 9
                                },
                                videocodeUrl: {
                                    type: "string",
                                    id: 10
                                },
                                previewVideoUrl: {
                                    type: "string",
                                    id: 11
                                }
                            }
                        },
                        LensRequestUserInfo: {
                            fields: {
                                countryCode: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        }
                    }
                },
                videomod: {
                    nested: {
                        Audience: {
                            fields: {
                                anyoneCanView: {
                                    type: "bool",
                                    id: 1
                                },
                                nobodyUnder_18CanView: {
                                    type: "bool",
                                    id: 2
                                },
                                nobodyCanView: {
                                    type: "bool",
                                    id: 3
                                },
                                nobodyInSensitiveCountryCanView: {
                                    type: "bool",
                                    id: 4
                                }
                            }
                        },
                        BrandSafety: {
                            fields: {
                                isBrandUnsafe: {
                                    type: "bool",
                                    id: 1
                                },
                                isSponsoredContent: {
                                    type: "bool",
                                    id: 2
                                }
                            }
                        },
                        ContentQuality: {
                            fields: {
                                isSuggestive: {
                                    type: "bool",
                                    id: 1
                                },
                                isShockingImagery: {
                                    type: "bool",
                                    id: 2
                                }
                            }
                        },
                        ModerationFeatures: {
                            fields: {
                                audience: {
                                    type: "Audience",
                                    id: 1
                                },
                                brandSafety: {
                                    type: "BrandSafety",
                                    id: 2
                                },
                                contentQuality: {
                                    type: "ContentQuality",
                                    id: 3
                                }
                            }
                        }
                    }
                },
                research: {},
                videodoc: {
                    nested: {
                        Owner: {
                            fields: {},
                            nested: {
                                ID: {
                                    fields: {
                                        namespace: {
                                            type: "OwnerNamespace",
                                            id: 1
                                        },
                                        id: {
                                            type: "string",
                                            id: 2
                                        }
                                    },
                                    nested: {
                                        OwnerNamespace: {
                                            values: {
                                                UNSET: 0,
                                                DISCOVER_PUBLISHER: 1,
                                                BUSINESS_ACCOUNT: 2,
                                                BUSINESS_PROFILE: 3
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Provenance: {
                            fields: {
                                sourceSystem: {
                                    type: "VideoSourceSystem",
                                    id: 1
                                },
                                sourceId: {
                                    type: "string",
                                    id: 2
                                },
                                sourceVersion: {
                                    type: "string",
                                    id: 3
                                },
                                ownerId: {
                                    type: "company.videodoc.Owner.ID",
                                    id: 5
                                },
                                appSource: {
                                    type: "AppSource",
                                    id: 4
                                }
                            },
                            nested: {
                                VideoSourceSystem: {
                                    values: {
                                        UNSET: 0,
                                        RICH_SNAP_PLATFORM_ADS: 1,
                                        RICH_SNAP_PLATFORM_DISCOVER: 2,
                                        STORY_CREATION_SERVICE: 3
                                    }
                                },
                                AppSource: {
                                    values: {
                                        APP_SOURCE_UNSET: 0,
                                        APP_SOURCE_CAMERA: 1,
                                        APP_SOURCE_MEMORIES: 2,
                                        APP_SOURCE_CHAT: 3,
                                        APP_SOURCE_PROFILE_SAVED_CHAT_MEDIA: 4
                                    }
                                }
                            }
                        },
                        VideoComponentType: {
                            values: {
                                UNKNOWN: 0,
                                MEDIA: 1,
                                DURATION: 2,
                                TIMING: 3,
                                UNLOCKABLES: 4,
                                CONTEXT: 5,
                                ATTACHMENT: 6,
                                SNAPPABLE: 7,
                                STORY_METADATA: 8,
                                GROUP_STORY: 23,
                                OUR_STORY: 24,
                                ATTRIBUTION: 9,
                                THUMBNAIL: 10,
                                PREVIEW_FRAME: 46,
                                CONTENT_ANALYSIS: 11,
                                PROVENANCE: 22,
                                PACKAGING: 25,
                                CONTENT_TAGGING: 26,
                                SNAP_MODERATION: 30,
                                CREATIVE_KIT_SOURCE_APP: 31,
                                CONTENT_OBJECTS: 32,
                                LEGACY_MULTISNAP: 33,
                                SPECTACLES: 34,
                                CAPTION: 35,
                                VIDEO_TRANSCRIPTION: 36,
                                REPLY: 37,
                                GAME_ATTACHMENT: 38,
                                VIDEO_INTERVAL: 39,
                                PERMITTED_USER_ACTIONS: 40,
                                CREATIVE_TOOLS_ANALYTICS: 41,
                                PLAYBACK_CHARACTERISTICS: 42,
                                CAPTURE_CHARACTERISTICS: 43,
                                STICKER_METADATA: 44,
                                LENS: 45,
                                ATTACHMENTS: 47,
                                CALL_TO_ACTION: 48,
                                APP_DEEP_LINK: 12,
                                APP_INSTALL: 13,
                                COMMERCE: 14,
                                LENS_CAROUSEL: 15,
                                LONGFORM_VIDEO: 16,
                                NOTIFICATION_SETTINGS: 17,
                                SUBSCRIPTION: 18,
                                WEB_PAGE: 19,
                                ARTICLE: 27,
                                POLL: 28,
                                CAMERA_ATTACHMENT: 29
                            }
                        },
                        VideoDoc: {
                            fields: {
                                id: {
                                    type: "ID",
                                    id: 3
                                },
                                envelope: {
                                    rule: "repeated",
                                    type: "VideoEnvelope",
                                    id: 2
                                }
                            },
                            nested: {
                                ID: {
                                    fields: {
                                        id: {
                                            type: "string",
                                            id: 2
                                        }
                                    }
                                }
                            }
                        },
                        VideoEnvelope: {
                            fields: {
                                componentTypeId: {
                                    type: "VideoComponentType",
                                    id: 1
                                },
                                componentTypeName: {
                                    type: "string",
                                    id: 2
                                },
                                componentBytes: {
                                    type: "bytes",
                                    id: 3
                                },
                                encrypted: {
                                    type: "bool",
                                    id: 4
                                }
                            }
                        },
                        Duration: {
                            fields: {
                                infinite: {
                                    type: "google.protobuf.Empty",
                                    id: 1
                                },
                                playOnce: {
                                    type: "google.protobuf.Empty",
                                    id: 2
                                },
                                durationSeconds: {
                                    type: "uint32",
                                    id: 3
                                }
                            }
                        },
                        MediaMetadata: {
                            fields: {
                                orientation: {
                                    type: "Orientation",
                                    id: 3
                                },
                                dimensions: {
                                    type: "MediaDimensions",
                                    id: 5
                                },
                                mediaDurationMs: {
                                    type: "uint32",
                                    id: 15
                                },
                                type: {
                                    type: "MediaType",
                                    id: 2
                                },
                                encryptionInfo: {
                                    type: "MediaEncryptionInfo",
                                    id: 4
                                },
                                legacyMediaSource: {
                                    type: "LegacyMediaSource",
                                    id: 6
                                },
                                mediaUrl: {
                                    type: "string",
                                    id: 9
                                },
                                hasSound: {
                                    type: "bool",
                                    id: 12
                                },
                                zipped: {
                                    type: "bool",
                                    id: 13
                                },
                                frontFacing: {
                                    type: "bool",
                                    id: 14
                                }
                            },
                            nested: {
                                Orientation: {
                                    values: {
                                        VERTICAL: 0,
                                        HORIZONTAL: 1
                                    }
                                },
                                MediaDimensions: {
                                    fields: {
                                        width: {
                                            type: "uint32",
                                            id: 1
                                        },
                                        height: {
                                            type: "uint32",
                                            id: 2
                                        }
                                    }
                                },
                                MediaType: {
                                    values: {
                                        IMAGE: 0,
                                        VIDEO: 1,
                                        GIF: 2,
                                        AUDIO: 3
                                    }
                                },
                                MediaEncryptionInfo: {
                                    fields: {
                                        key: {
                                            type: "bytes",
                                            id: 1
                                        },
                                        iv: {
                                            type: "bytes",
                                            id: 2
                                        }
                                    }
                                },
                                LegacyMediaSource: {
                                    fields: {
                                        sourceMediaId: {
                                            type: "string",
                                            id: 1
                                        },
                                        directDownloadUrl: {
                                            type: "LegacyDirectDownloadUrl",
                                            id: 2
                                        }
                                    },
                                    nested: {
                                        LegacyDirectDownloadUrl: {
                                            fields: {
                                                url: {
                                                    type: "string",
                                                    id: 1
                                                },
                                                expirySeconds: {
                                                    type: "uint64",
                                                    id: 2
                                                },
                                                type: {
                                                    type: "MediaUrlType",
                                                    id: 3
                                                },
                                                region: {
                                                    type: "string",
                                                    id: 4
                                                }
                                            },
                                            nested: {
                                                MediaUrlType: {
                                                    values: {
                                                        GCS: 0,
                                                        S3: 1,
                                                        UNRECOGNIZED_VALUE: 2
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        Thumbnail: {
                            fields: {
                                url: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        Timing: {
                            fields: {
                                timestamp: {
                                    type: "uint32",
                                    id: 1
                                },
                                secondaryTimestamp: {
                                    type: "uint32",
                                    id: 2
                                },
                                pendingDeliveryTimestamp: {
                                    type: "uint32",
                                    id: 3
                                },
                                sendStartTimestamp: {
                                    type: "uint32",
                                    id: 4
                                },
                                locationTimestamp: {
                                    type: "uint64",
                                    id: 5
                                },
                                mediaCaptureTimestamp: {
                                    type: "uint64",
                                    id: 6
                                },
                                videoCreateTimestamp: {
                                    type: "uint64",
                                    id: 7
                                }
                            }
                        }
                    }
                },
                storyaggregation: {
                    nested: {
                        Ordering: {
                            values: {
                                CHRONOLOGICAL: 0,
                                REVERSE_CHRONOLOGICAL: 1
                            }
                        },
                        GetStoriesByOwnerResponse: {
                            fields: {
                                stories: {
                                    rule: "repeated",
                                    type: "company.storydoc.StoryDoc",
                                    id: 1
                                },
                                cursor: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        }
                    }
                },
                content: {},
                lenses: {
                    nested: {
                        videopable: {}
                    }
                },
                unlockables: {
                    nested: {
                        request: {
                            nested: {
                                schema: {}
                            }
                        }
                    }
                },
                docfilter: {},
                ads: {
                    nested: {
                        request: {
                            nested: {
                                schema: {
                                    nested: {
                                        ad: {}
                                    }
                                }
                            }
                        }
                    }
                },
                video_connect: {}
            }
        },
        impala: {
            nested: {
                highlights: {
                    nested: {
                        AdminListHighlightsRequest: {
                            fields: {
                                profileId: {
                                    type: "string",
                                    id: 1
                                },
                                pageId: {
                                    type: "string",
                                    id: 2
                                },
                                limit: {
                                    type: "int32",
                                    id: 3
                                }
                            }
                        },
                        AdminListHighlightsResponse: {
                            fields: {
                                highlights: {
                                    rule: "repeated",
                                    type: "AdminHighlight",
                                    id: 1
                                },
                                nextPageId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        AdminGetHighlightsRequest: {
                            fields: {
                                profileId: {
                                    type: "string",
                                    id: 1
                                },
                                highlightIds: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        AdminGetHighlightsResponse: {
                            fields: {
                                highlights: {
                                    rule: "repeated",
                                    type: "AdminHighlight",
                                    id: 1
                                }
                            }
                        },
                        ListHighlightsRequest: {
                            fields: {
                                profileId: {
                                    type: "string",
                                    id: 1
                                },
                                pageId: {
                                    type: "string",
                                    id: 2
                                },
                                limit: {
                                    type: "int32",
                                    id: 3
                                }
                            }
                        },
                        ListHighlightsResponse: {
                            fields: {
                                highlights: {
                                    rule: "repeated",
                                    type: "Highlight",
                                    id: 1
                                },
                                nextPageId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        CreateHighlightRequest: {
                            fields: {
                                profileId: {
                                    type: "string",
                                    id: 1
                                },
                                videos: {
                                    rule: "repeated",
                                    type: "HighlightVideo",
                                    id: 2
                                },
                                thumbnailVideoIndex: {
                                    type: "int32",
                                    id: 3
                                },
                                title: {
                                    type: "string",
                                    id: 4
                                },
                                coverThumbnailData: {
                                    type: "BoltUploadObject",
                                    id: 5
                                },
                                coverThumbnailUrl: {
                                    type: "string",
                                    id: 6
                                }
                            }
                        },
                        CreateHighlightResponse: {
                            fields: {
                                highlight: {
                                    type: "Highlight",
                                    id: 1
                                }
                            }
                        },
                        UpdateHighlightRequest: {
                            fields: {
                                profileId: {
                                    type: "string",
                                    id: 1
                                },
                                highlightId: {
                                    type: "string",
                                    id: 2
                                },
                                expectedVersion: {
                                    type: "string",
                                    id: 3
                                },
                                videos: {
                                    rule: "repeated",
                                    type: "HighlightVideo",
                                    id: 4
                                },
                                thumbnailVideoIndex: {
                                    type: "int32",
                                    id: 5
                                },
                                title: {
                                    type: "string",
                                    id: 6
                                },
                                coverThumbnailData: {
                                    type: "BoltUploadObject",
                                    id: 7
                                },
                                coverThumbnailUrl: {
                                    type: "string",
                                    id: 8
                                }
                            }
                        },
                        UpdateHighlightResponse: {
                            fields: {
                                highlight: {
                                    type: "Highlight",
                                    id: 1
                                }
                            }
                        },
                        DeleteHighlightRequest: {
                            fields: {
                                profileId: {
                                    type: "string",
                                    id: 1
                                },
                                highlightId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        DeleteHighlightResponse: {
                            fields: {}
                        },
                        Highlight: {
                            fields: {
                                story: {
                                    type: "company.storydoc.StoryDoc",
                                    id: 1
                                },
                                version: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        AdminHighlight: {
                            fields: {
                                story: {
                                    type: "company.storydoc.StoryDoc",
                                    id: 1
                                },
                                version: {
                                    type: "string",
                                    id: 2
                                },
                                isProcessing: {
                                    type: "bool",
                                    id: 3
                                },
                                coverVideoId: {
                                    type: "string",
                                    id: 4
                                }
                            }
                        },
                        HighlightVideo: {
                            fields: {
                                highlightVideoId: {
                                    type: "string",
                                    id: 1
                                },
                                profileStoryVideoId: {
                                    type: "string",
                                    id: 2
                                },
                                boltUploadObject: {
                                    type: "BoltUploadObject",
                                    id: 3
                                }
                            }
                        },
                        BoltUploadObject: {
                            fields: {
                                boltContentObject: {
                                    type: "bytes",
                                    id: 1
                                },
                                mediaInfo: {
                                    type: "UploadMediaInfo",
                                    id: 2
                                }
                            }
                        },
                        UploadMediaInfo: {
                            fields: {
                                mediaType: {
                                    type: "UploadMediaType",
                                    id: 1
                                },
                                durationMs: {
                                    type: "int32",
                                    id: 2
                                }
                            }
                        },
                        UploadMediaType: {
                            values: {
                                UNKNOWN: 0,
                                IMAGE: 1,
                                VIDEO: 2
                            }
                        }
                    }
                },
                BusinessProfileUserData: {
                    fields: {
                        isSubscribed: {
                            type: "bool",
                            id: 1
                        },
                        allowedActions: {
                            rule: "repeated",
                            type: "string",
                            id: 2
                        },
                        pendingRoleInvites: {
                            rule: "repeated",
                            type: "PendingRoleInvite",
                            id: 3
                        },
                        roles: {
                            rule: "repeated",
                            type: "Role",
                            id: 4
                        },
                        isHost: {
                            type: "bool",
                            id: 5
                        },
                        userSettings: {
                            type: "BusinessUserSettings",
                            id: 6
                        },
                        badgeDisplay: {
                            type: "google.protobuf.StringValue",
                            id: 7
                        }
                    }
                },
                BusinessSubcategoryV3: {
                    values: {
                        SUBCATEGORY_V3_UNKNOWN: 0,
                        SUBCATEGORY_V3_BUSINESS: 114,
                        SUBCATEGORY_V3_CHARITY_CAUSE: 100,
                        SUBCATEGORY_V3_COLLEGE_UNIVERSITY: 101,
                        SUBCATEGORY_V3_COMMUNITY_ORG: 102,
                        SUBCATEGORY_V3_COMPANY_ENTERPRISE: 103,
                        SUBCATEGORY_V3_GOVERNMENT_ORG: 104,
                        SUBCATEGORY_V3_GROUP: 115,
                        SUBCATEGORY_V3_INTERNET_COMPANY: 105,
                        SUBCATEGORY_V3_MEDIA_NEWS_COMPANY: 106,
                        SUBCATEGORY_V3_NONPROFIT_ORG: 107,
                        SUBCATEGORY_V3_POLITICAL_ORG: 108,
                        SUBCATEGORY_V3_RELIGIOUS_ORG: 109,
                        SUBCATEGORY_V3_RESTAURANT_CHAIN: 110,
                        SUBCATEGORY_V3_RETAIL_COMPANY: 111,
                        SUBCATEGORY_V3_SPORTS_LEAGUE: 112,
                        SUBCATEGORY_V3_SPORTS_TEAM: 113,
                        SUBCATEGORY_V3_ACTOR: 200,
                        SUBCATEGORY_V3_ARTIST: 201,
                        SUBCATEGORY_V3_ATHLETE: 202,
                        SUBCATEGORY_V3_COACH: 203,
                        SUBCATEGORY_V3_COMEDIAN: 204,
                        SUBCATEGORY_V3_CREATOR: 231,
                        SUBCATEGORY_V3_DANCER: 205,
                        SUBCATEGORY_V3_ENTREPRENEUR: 206,
                        SUBCATEGORY_V3_FASHION_MODEL: 207,
                        SUBCATEGORY_V3_FILM_DIRECTOR: 208,
                        SUBCATEGORY_V3_FILM_TV_PERSONALITY: 209,
                        SUBCATEGORY_V3_FITNESS_PRO: 210,
                        SUBCATEGORY_V3_FOOD_PRO: 211,
                        SUBCATEGORY_V3_GOVERNMENT_OFFICIAL: 212,
                        SUBCATEGORY_V3_JOURNALIST: 213,
                        SUBCATEGORY_V3_LENS_CREATOR: 233,
                        SUBCATEGORY_V3_LIFESTYLE_INFLUENCER: 214,
                        SUBCATEGORY_V3_MOTIVATIONAL_SPEAKER: 215,
                        SUBCATEGORY_V3_MOVIE_CHARACTER: 216,
                        SUBCATEGORY_V3_MUSICIAN_BAND: 217,
                        SUBCATEGORY_V3_NEWS_PERSONALITY: 218,
                        SUBCATEGORY_V3_PERSON: 232,
                        SUBCATEGORY_V3_PHOTOGRAPHER: 219,
                        SUBCATEGORY_V3_POLITICAL_CANDIDATE: 220,
                        SUBCATEGORY_V3_POLITICIAN: 221,
                        SUBCATEGORY_V3_PRODUCER: 222,
                        SUBCATEGORY_V3_PROFESSIONAL_GAMER: 223,
                        SUBCATEGORY_V3_PUBLIC_FIGURE: 224,
                        SUBCATEGORY_V3_SCIENTIST: 225,
                        SUBCATEGORY_V3_SPORTS_PERSONALITY: 226,
                        SUBCATEGORY_V3_TRAVELER: 227,
                        SUBCATEGORY_V3_VIDEO_GAME_CREATOR: 228,
                        SUBCATEGORY_V3_VLOGGER_BLOGGER: 229,
                        SUBCATEGORY_V3_WRITER: 230,
                        SUBCATEGORY_V3_APPAREL_FASHION: 300,
                        SUBCATEGORY_V3_BRAND: 301,
                        SUBCATEGORY_V3_PRODUCT: 302,
                        SUBCATEGORY_V3_FILM_TV: 303,
                        SUBCATEGORY_V3_HEALTH_BEAUTY: 304,
                        SUBCATEGORY_V3_PUBLISHER: 305,
                        SUBCATEGORY_V3_SERVICE: 306,
                        SUBCATEGORY_V3_SHOW: 307,
                        SUBCATEGORY_V3_VIDEO_GAME: 308
                    }
                },
                UserSettings: {
                    fields: {
                        manageRolesNuxHintViewCount: {
                            type: "google.protobuf.Int32Value",
                            id: 1
                        },
                        unifiedProfileNuxSeen: {
                            type: "google.protobuf.BoolValue",
                            id: 2
                        },
                        highlightsNuxSeen: {
                            type: "google.protobuf.BoolValue",
                            id: 3
                        }
                    }
                },
                DeleteRoleInviteResponse: {
                    fields: {}
                },
                InviteUserToRoleResponse: {
                    fields: {
                        autoApproved: {
                            type: "bool",
                            id: 1
                        },
                        roleAlreadyExists: {
                            type: "bool",
                            id: 2
                        }
                    }
                },
                PublisherLogoPlacement: {
                    values: {
                        LOGO_BOTTOM: 0,
                        LOGO_OFF: 1
                    }
                },
                BusinessProfileFeatures: {
                    fields: {
                        canEditTitle: {
                            type: "bool",
                            id: 1
                        },
                        canEditHighlights: {
                            type: "bool",
                            id: 2
                        },
                        canEditWebsite: {
                            type: "bool",
                            id: 3
                        },
                        canEditEmail: {
                            type: "bool",
                            id: 4
                        }
                    }
                },
                UpdateUserSettingsResponse: {
                    fields: {}
                },
                ListPendingRoleInvitesForUserResponse: {
                    fields: {
                        pageId: {
                            type: "string",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        },
                        pendingProfiles: {
                            rule: "repeated",
                            type: "BusinessProfileAndUserData",
                            id: 3
                        }
                    }
                },
                Role: {
                    fields: {
                        roleId: {
                            type: "string",
                            id: 1
                        },
                        userId: {
                            type: "string",
                            id: 2
                        },
                        roleType: {
                            type: "string",
                            id: 3
                        },
                        userDisplayName: {
                            type: "string",
                            id: 4
                        },
                        userUsername: {
                            type: "string",
                            id: 5
                        },
                        email: {
                            type: "string",
                            id: 6
                        },
                        userDisplayNameOverride: {
                            type: "string",
                            id: 7
                        },
                        virtualSourceProfileId: {
                            type: "string",
                            id: 8
                        }
                    }
                },
                AcceptRoleInviteRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        roleType: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                UpdateBusinessProfileRequest: {
                    fields: {
                        id: {
                            type: "string",
                            id: 1
                        },
                        title: {
                            type: "UpdateString",
                            id: 2
                        },
                        description: {
                            type: "UpdateString",
                            id: 3
                        },
                        phoneNumber: {
                            type: "UpdateString",
                            id: 4
                        },
                        emailAddress: {
                            type: "UpdateString",
                            id: 6
                        },
                        logo: {
                            type: "UpdateBytes",
                            id: 7
                        },
                        heroImage: {
                            type: "UpdateBytes",
                            id: 12
                        },
                        websiteUrl: {
                            type: "UpdateString",
                            id: 8
                        },
                        addressInfo: {
                            type: "Address",
                            id: 9
                        },
                        category: {
                            type: "UpdateString",
                            id: 10
                        },
                        subcategory: {
                            type: "UpdateString",
                            id: 11
                        },
                        privateEmail: {
                            type: "UpdateString",
                            id: 100
                        },
                        privatePhoneNumber: {
                            type: "UpdateString",
                            id: 101
                        },
                        isTestProfile: {
                            type: "UpdateBool",
                            id: 200
                        },
                        address: {
                            type: "UpdateString",
                            id: 5
                        }
                    }
                },
                ContentIdentifier: {
                    fields: {
                        contentType: {
                            type: "ContentType",
                            id: 1
                        },
                        contentId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                BusinessCategoryV3: {
                    values: {
                        CATEGORY_V3_UNKNOWN: 0,
                        CATEGORY_V3_BUSINESS_GROUP: 1,
                        CATEGORY_V3_PEOPLE: 2,
                        CATEGORY_V3_PRODUCT_BRAND: 3
                    }
                },
                UpdateString: {
                    fields: {
                        val: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                Deeplinks: {
                    fields: {
                        videocodeWebUrl: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                BusinessProfileAndUserData: {
                    fields: {
                        businessProfile: {
                            type: "BusinessProfile",
                            id: 1
                        },
                        userData: {
                            type: "BusinessProfileUserData",
                            id: 5
                        },
                        businessProfileFeatures: {
                            type: "BusinessProfileFeatures",
                            id: 7
                        },
                        story: {
                            type: "impala.stories.common.BusinessStory",
                            id: 6
                        },
                        isSubscribed: {
                            type: "bool",
                            id: 2
                        },
                        allowedActions: {
                            rule: "repeated",
                            type: "string",
                            id: 3
                        },
                        pendingRoleInvites: {
                            rule: "repeated",
                            type: "PendingRoleInvite",
                            id: 4
                        }
                    }
                },
                UpdateUserSettingsRequest: {
                    fields: {
                        settings: {
                            type: "UserSettings",
                            id: 1
                        }
                    }
                },
                PublisherDisplayInfo: {
                    fields: {
                        backgroundImageUrl: {
                            type: "string",
                            id: 1
                        },
                        backgroundImageBitmojiTemplateId: {
                            type: "string",
                            id: 7
                        },
                        horizontalLogoUrl: {
                            type: "string",
                            id: 2
                        },
                        horizontalLogoHidden: {
                            type: "bool",
                            id: 3
                        },
                        primaryColor: {
                            type: "string",
                            id: 4
                        },
                        logoPlacement: {
                            type: "PublisherLogoPlacement",
                            id: 5
                        },
                        publisherId: {
                            type: "string",
                            id: 6
                        },
                        isBreakingNewsEnabled: {
                            type: "bool",
                            id: 8
                        }
                    }
                },
                Address: {
                    fields: {
                        streetAddress: {
                            type: "string",
                            id: 1
                        },
                        city: {
                            type: "string",
                            id: 2
                        },
                        zipCode: {
                            type: "string",
                            id: 3
                        },
                        country: {
                            type: "string",
                            id: 4
                        },
                        administrativeDistrict: {
                            type: "string",
                            id: 5
                        }
                    }
                },
                DeactivateBusinessResponse: {
                    fields: {}
                },
                ListRolesForBusinessResponse: {
                    fields: {
                        pageId: {
                            type: "string",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        },
                        roles: {
                            rule: "repeated",
                            type: "Role",
                            id: 3
                        },
                        orgRoles: {
                            rule: "repeated",
                            type: "Role",
                            id: 4
                        }
                    }
                },
                GetManagedProfileCalloutsRequest: {
                    fields: {
                        id: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                        }
                    }
                },
                ListRolesForBusinessRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                DeleteRoleResponse: {
                    fields: {}
                },
                ListPendingRoleInvitesForBusinessRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                InviteUserToRoleRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        receivingUserId: {
                            type: "string",
                            id: 2
                        },
                        invitingUserId: {
                            type: "string",
                            id: 5
                        },
                        roleType: {
                            type: "string",
                            id: 6
                        }
                    }
                },
                UpdateBusinessSubscribeStatusRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        subscribing: {
                            type: "bool",
                            id: 2
                        }
                    }
                },
                DeleteRoleRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        userId: {
                            type: "string",
                            id: 2
                        },
                        roleId: {
                            type: "string",
                            id: 3
                        }
                    }
                },
                BusinessLogo: {
                    fields: {
                        discoverFeedLogoUrl: {
                            type: "string",
                            id: 1
                        },
                        megaProfileLogoUrl: {
                            type: "string",
                            id: 2
                        },
                        manageProfileLogoUrl: {
                            type: "string",
                            id: 3
                        },
                        originalLogoUrl: {
                            type: "string",
                            id: 4
                        }
                    }
                },
                GetManagedProfileCalloutsResponse: {
                    fields: {
                        callouts: {
                            rule: "repeated",
                            type: "ManagedProfileCallouts",
                            id: 1
                        }
                    }
                },
                AcceptRoleInviteResponse: {
                    fields: {
                        failedRoleTypeMismatch: {
                            type: "bool",
                            id: 1
                        }
                    }
                },
                DeleteRoleInviteRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        inviteeUserId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                UpdateBusinessUserSettingsResponse: {
                    fields: {}
                },
                GetBusinessProfileRequest: {
                    fields: {
                        id: {
                            type: "string",
                            id: 1
                        },
                        publisherId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                UpdateBytes: {
                    fields: {
                        val: {
                            type: "bytes",
                            id: 1
                        }
                    }
                },
                ContentType: {
                    values: {
                        MOMENTS: 0,
                        SHOWS: 1,
                        DISCOVER: 2
                    }
                },
                DeactivateBusinessRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                ManagedProfileCallouts: {
                    fields: {
                        manageRolesNuxHintViewCount: {
                            type: "int32",
                            id: 1
                        },
                        subscribersTodayCount: {
                            type: "google.protobuf.Int32Value",
                            id: 2
                        },
                        viewsTodayCount: {
                            type: "google.protobuf.Int32Value",
                            id: 3
                        },
                        videosPostedWeekCount: {
                            type: "google.protobuf.Int32Value",
                            id: 4
                        }
                    }
                },
                UpdateBusinessProfileResponse: {
                    fields: {
                        profile: {
                            type: "BusinessProfile",
                            id: 1
                        }
                    }
                },
                GetBusinessProfileResponse: {
                    fields: {
                        profile: {
                            type: "BusinessProfileAndUserData",
                            id: 1
                        }
                    }
                },
                UpdateRoleRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        userId: {
                            type: "string",
                            id: 2
                        },
                        roleId: {
                            type: "string",
                            id: 3
                        },
                        newRoleType: {
                            type: "string",
                            id: 4
                        }
                    }
                },
                UpdateRoleResponse: {
                    fields: {}
                },
                UpdateBool: {
                    fields: {
                        val: {
                            type: "bool",
                            id: 1
                        }
                    }
                },
                BusinessProfile: {
                    fields: {
                        id: {
                            type: "string",
                            id: 1
                        },
                        title: {
                            type: "string",
                            id: 2
                        },
                        description: {
                            type: "string",
                            id: 3
                        },
                        logoUrl: {
                            type: "string",
                            id: 4
                        },
                        phoneNumber: {
                            type: "string",
                            id: 5
                        },
                        address: {
                            type: "string",
                            id: 6
                        },
                        emailAddress: {
                            type: "string",
                            id: 7
                        },
                        profileDeeplinkUrl: {
                            type: "string",
                            id: 8
                        },
                        websiteUrl: {
                            type: "string",
                            id: 10
                        },
                        hostAccountUsername: {
                            type: "string",
                            id: 11
                        },
                        lastUpdateSequence: {
                            type: "int64",
                            id: 12
                        },
                        businessAddress: {
                            type: "Address",
                            id: 13
                        },
                        category: {
                            type: "string",
                            id: 14
                        },
                        subcategory: {
                            type: "string",
                            id: 24
                        },
                        displayAddress: {
                            type: "string",
                            id: 15
                        },
                        businessLogo: {
                            type: "BusinessLogo",
                            id: 18
                        },
                        heroImageUrl: {
                            type: "string",
                            id: 35
                        },
                        hostAccountVerifiedEmoji: {
                            type: "string",
                            id: 19
                        },
                        hostAccountVerifiedEmojiSafe: {
                            type: "string",
                            id: 29
                        },
                        isOfficialAccount: {
                            type: "bool",
                            id: 28
                        },
                        hostAccountVerifiedEmojiWithoutModifiers: {
                            type: "string",
                            id: 30
                        },
                        bitmojiAvatarId: {
                            type: "string",
                            id: 31
                        },
                        subtitle: {
                            type: "string",
                            id: 20
                        },
                        hostAccountUserId: {
                            type: "string",
                            id: 21
                        },
                        contents: {
                            rule: "repeated",
                            type: "ContentIdentifier",
                            id: 22
                        },
                        initiallyDisplayedContentIndex: {
                            type: "int64",
                            id: 23
                        },
                        publisherInfo: {
                            type: "PublisherDisplayInfo",
                            id: 26
                        },
                        commerceStoreInfo: {
                            type: "CommerceStoreInfo",
                            id: 33
                        },
                        hasLenses: {
                            type: "bool",
                            id: 34
                        },
                        isLensCreator: {
                            type: "bool",
                            id: 36
                        },
                        hasHighlights: {
                            type: "bool",
                            id: 37
                        },
                        showInfo: {
                            type: "ShowDisplayInfo",
                            id: 25
                        },
                        deeplinks: {
                            type: "Deeplinks",
                            id: 27
                        },
                        privateEmail: {
                            type: "string",
                            id: 100
                        },
                        privatePhoneNumber: {
                            type: "string",
                            id: 101
                        },
                        isTestProfile: {
                            type: "bool",
                            id: 200
                        },
                        organizationId: {
                            type: "string",
                            id: 300
                        },
                        accountId: {
                            type: "string",
                            id: 301
                        }
                    }
                },
                UpdateBusinessUserSettingsRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        showStoryAttribution: {
                            type: "google.protobuf.BoolValue",
                            id: 2
                        },
                        notificationSettings: {
                            type: "BusinessUserSettings.NotificationSettings",
                            id: 3
                        },
                        newestReadNotificationTimestamp: {
                            type: "google.protobuf.Int64Value",
                            id: 4
                        },
                        profileManagementViewCount: {
                            type: "google.protobuf.Int32Value",
                            id: 5
                        }
                    }
                },
                BusinessUserSettings: {
                    fields: {
                        showStoryAttribution: {
                            type: "bool",
                            id: 1
                        },
                        notificationSettings: {
                            type: "NotificationSettings",
                            id: 2
                        },
                        newestReadNotificationTimestamp: {
                            type: "int64",
                            id: 3
                        },
                        profileManagementViewCount: {
                            type: "int32",
                            id: 4
                        }
                    },
                    nested: {
                        NotificationSettings: {
                            fields: {
                                suppressStoryContributionPushNotifications: {
                                    type: "bool",
                                    id: 1
                                }
                            }
                        }
                    }
                },
                ListPendingRoleInvitesForBusinessResponse: {
                    fields: {
                        pageId: {
                            type: "string",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        },
                        invites: {
                            rule: "repeated",
                            type: "PendingRoleInvite",
                            id: 3
                        }
                    }
                },
                CommerceStoreInfo: {
                    fields: {
                        storeId: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                ShowDisplayInfo: {
                    fields: {
                        showImageUrl: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                ListPendingRoleInvitesForUserRequest: {
                    fields: {
                        pageId: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                PendingRoleInvite: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        invitingUserId: {
                            type: "string",
                            id: 2
                        },
                        invitingUsername: {
                            type: "string",
                            id: 3
                        },
                        invitingDisplayName: {
                            type: "string",
                            id: 4
                        },
                        roleType: {
                            type: "string",
                            id: 5
                        },
                        status: {
                            type: "Status",
                            id: 6
                        },
                        invitedUserId: {
                            type: "string",
                            id: 7
                        },
                        invitedUsername: {
                            type: "string",
                            id: 8
                        },
                        invitedUserDisplayName: {
                            type: "string",
                            id: 9
                        }
                    },
                    nested: {
                        Status: {
                            values: {
                                UNKNOWN: 0,
                                PENDING: 1,
                                ACCEPTED: 2
                            }
                        }
                    }
                },
                business: {},
                profile: {},
                stories: {
                    nested: {
                        common: {
                            nested: {
                                BusinessStory: {
                                    fields: {
                                        businessId: {
                                            type: "string",
                                            id: 1
                                        },
                                        numVideos: {
                                            type: "int32",
                                            id: 2
                                        },
                                        timeRange: {
                                            type: "TimeRange",
                                            id: 3
                                        },
                                        thumbnailUrl: {
                                            type: "string",
                                            id: 4
                                        },
                                        lastVideoId: {
                                            type: "string",
                                            id: 5
                                        },
                                        displayTimeRange: {
                                            type: "TimeRange",
                                            id: 6
                                        },
                                        metrics: {
                                            type: "BusinessStoryMetrics",
                                            id: 7
                                        }
                                    }
                                },
                                TimeRange: {
                                    fields: {
                                        startTimestamp: {
                                            type: "int64",
                                            id: 1
                                        },
                                        endTimestamp: {
                                            type: "int64",
                                            id: 2
                                        }
                                    }
                                },
                                BusinessStoryMetrics: {
                                    fields: {
                                        reach: {
                                            type: "int32",
                                            id: 1
                                        },
                                        screenshotCount: {
                                            type: "int32",
                                            id: 2
                                        }
                                    }
                                }
                            }
                        },
                        BusinessVideoInsights: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                videoId: {
                                    type: "string",
                                    id: 2
                                },
                                globalStats: {
                                    type: "GlobalStats",
                                    id: 3
                                },
                                sectionStats: {
                                    rule: "repeated",
                                    type: "SectionStats",
                                    id: 4
                                }
                            },
                            nested: {
                                GlobalStats: {
                                    fields: {
                                        viewCount: {
                                            type: "int64",
                                            id: 1
                                        },
                                        screenshotCount: {
                                            type: "int64",
                                            id: 2
                                        }
                                    }
                                },
                                SectionStats: {
                                    fields: {
                                        type: {
                                            type: "Type",
                                            id: 1
                                        },
                                        viewCount: {
                                            type: "int64",
                                            id: 2
                                        },
                                        screenshotCount: {
                                            type: "int64",
                                            id: 3
                                        },
                                        recentViewers: {
                                            rule: "repeated",
                                            type: "Viewer",
                                            id: 4
                                        }
                                    },
                                    nested: {
                                        Type: {
                                            values: {
                                                UNKNOWN: 0,
                                                FRIEND: 1,
                                                SUBSCRIBER: 2,
                                                OTHER: 3
                                            }
                                        },
                                        Viewer: {
                                            fields: {
                                                userId: {
                                                    type: "string",
                                                    id: 1
                                                },
                                                username: {
                                                    type: "string",
                                                    id: 2
                                                },
                                                displayName: {
                                                    type: "string",
                                                    id: 3
                                                },
                                                viewTimestamp: {
                                                    type: "int64",
                                                    id: 4
                                                },
                                                bitmojiAvatarId: {
                                                    type: "string",
                                                    id: 5
                                                },
                                                bitmojiSelfieId: {
                                                    type: "string",
                                                    id: 6
                                                },
                                                isVerified: {
                                                    type: "bool",
                                                    id: 7
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        GetPastBusinessStoriesResponse: {
                            fields: {
                                nextPageId: {
                                    type: "string",
                                    id: 1
                                },
                                manifests: {
                                    rule: "repeated",
                                    type: "company.context.StoryManifest",
                                    id: 2
                                }
                            }
                        },
                        GetBusinessStoryManifestResponse: {
                            fields: {
                                manifest: {
                                    type: "company.context.StoryManifest",
                                    id: 1
                                }
                            }
                        },
                        GetPastBusinessStoriesRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                pageId: {
                                    type: "string",
                                    id: 2
                                },
                                limit: {
                                    type: "int32",
                                    id: 3
                                }
                            }
                        },
                        GetBusinessStoryManifestRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                timeRange: {
                                    type: "impala.stories.common.TimeRange",
                                    id: 2
                                },
                                includeInsights: {
                                    type: "bool",
                                    id: 3
                                }
                            }
                        },
                        GetBusinessStoryVideoViewersRequest: {
                            fields: {
                                videoId: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        GetBusinessStoryVideoViewersResponse: {
                            fields: {
                                insights: {
                                    type: "BusinessVideoInsights",
                                    id: 1
                                }
                            }
                        }
                    }
                },
                ShowProfileLaunchInfo: {
                    fields: {
                        showId: {
                            type: "string",
                            id: 1
                        },
                        name: {
                            type: "string",
                            id: 2
                        },
                        description: {
                            type: "string",
                            id: 3
                        },
                        backgroundImageUrl: {
                            type: "string",
                            id: 4
                        },
                        horizontalLogoUrl: {
                            type: "string",
                            id: 5
                        },
                        showType: {
                            type: "ShowType",
                            id: 6
                        },
                        businessId: {
                            type: "string",
                            id: 7
                        },
                        overlayButtonText: {
                            type: "string",
                            id: 8
                        },
                        subscribed: {
                            type: "bool",
                            id: 9
                        },
                        optInNotifications: {
                            type: "bool",
                            id: 10
                        },
                        autosubscribe: {
                            type: "bool",
                            id: 12
                        },
                        profileLogoDisplay: {
                            type: "LogoDisplay",
                            id: 13
                        },
                        publisherId: {
                            type: "int64",
                            id: 14
                        },
                        showOptInNotificationDropdown: {
                            type: "bool",
                            id: 15
                        },
                        autosubscribeItemId: {
                            type: "string",
                            id: 16
                        },
                        autosubscribeItemIdSpecific: {
                            type: "string",
                            id: 17
                        },
                        publisherLogoUrl: {
                            type: "string",
                            id: 18
                        },
                        websiteUrl: {
                            type: "string",
                            id: 19
                        },
                        enableUnskippableAd: {
                            type: "bool",
                            id: 20
                        },
                        isBreakingNewsEnabled: {
                            type: "bool",
                            id: 22
                        },
                        requiresSubscriptionQuery: {
                            type: "bool",
                            id: 21
                        },
                        publisherName: {
                            type: "string",
                            id: 11
                        }
                    }
                },
                SeasonMetadata: {
                    fields: {
                        seasonId: {
                            type: "string",
                            id: 1
                        },
                        displayName: {
                            type: "string",
                            id: 2
                        },
                        showId: {
                            type: "string",
                            id: 3
                        },
                        seasonNumber: {
                            type: "int32",
                            id: 4
                        },
                        episodeCount: {
                            type: "int32",
                            id: 5
                        }
                    }
                },
                ShowMetadata: {
                    fields: {
                        showId: {
                            type: "string",
                            id: 1
                        },
                        name: {
                            type: "string",
                            id: 2
                        },
                        description: {
                            type: "string",
                            id: 3
                        },
                        backgroundImageUrl: {
                            type: "string",
                            id: 4
                        },
                        horizontalLogoUrl: {
                            type: "string",
                            id: 5
                        },
                        showType: {
                            type: "ShowType",
                            id: 6
                        },
                        overlayButtonText: {
                            type: "string",
                            id: 7
                        },
                        publisherId: {
                            type: "int64",
                            id: 8
                        },
                        publisherName: {
                            type: "string",
                            id: 9
                        },
                        businessProfileId: {
                            type: "string",
                            id: 10
                        },
                        logoUrl: {
                            type: "string",
                            id: 12
                        },
                        profileLogoDisplay: {
                            type: "LogoDisplay",
                            id: 13
                        },
                        deeplink: {
                            type: "string",
                            id: 14
                        },
                        websiteUrl: {
                            type: "string",
                            id: 15
                        },
                        totalExtrasCount: {
                            type: "int32",
                            id: 16
                        },
                        heroTeaserUrl: {
                            type: "string",
                            id: 17
                        },
                        isRollingNewsEnabled: {
                            type: "bool",
                            id: 19
                        }
                    }
                },
                LogoDisplay: {
                    values: {
                        BOTTOM: 0,
                        OFF: 1
                    }
                },
                GetShowDisplayInfoRequest: {
                    fields: {
                        showId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        },
                        userId: {
                            type: "string",
                            id: 3
                        },
                        episodeLimit: {
                            type: "int32",
                            id: 4
                        }
                    }
                },
                GetShowDisplayInfoResponse: {
                    fields: {
                        seasonsPage: {
                            type: "SeasonMetadataPage",
                            id: 1
                        },
                        initiallyDisplayedSeasonIndex: {
                            type: "int64",
                            id: 2
                        },
                        upNext: {
                            type: "company.storydoc.StoryDoc",
                            id: 3
                        },
                        upNextWatchedState: {
                            type: "WatchedState",
                            id: 4
                        },
                        title: {
                            type: "string",
                            id: 5
                        },
                        publisherName: {
                            type: "string",
                            id: 6
                        },
                        publisherId: {
                            type: "int64",
                            id: 7
                        },
                        showMetadata: {
                            type: "ShowMetadata",
                            id: 8
                        }
                    }
                },
                GetEpisodeListForSeasonRequest: {
                    fields: {
                        showId: {
                            type: "string",
                            id: 1
                        },
                        seasonId: {
                            type: "string",
                            id: 2
                        },
                        pageId: {
                            type: "string",
                            id: 3
                        },
                        pageSize: {
                            type: "int32",
                            id: 4
                        }
                    }
                },
                GetEpisodeListForSeasonResponse: {
                    fields: {
                        episodes: {
                            rule: "repeated",
                            type: "company.storydoc.StoryDoc",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                GetSeasonListForShowRequest: {
                    fields: {
                        showId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        },
                        episodeLimit: {
                            type: "int32",
                            id: 3
                        }
                    }
                },
                GetSeasonListForShowResponse: {
                    fields: {
                        seasonsPage: {
                            type: "SeasonMetadataPage",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        },
                        showType: {
                            type: "ShowType",
                            id: 3
                        }
                    }
                },
                SeasonMetadataPage: {
                    fields: {
                        seasons: {
                            rule: "repeated",
                            type: "SeasonMetadata",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                TrailerContent: {
                    fields: {
                        trailer: {
                            type: "company.storydoc.StoryDoc",
                            id: 1
                        }
                    }
                },
                ExtraContent: {
                    fields: {
                        trailer: {
                            type: "TrailerContent",
                            id: 1
                        }
                    }
                },
                GetExtrasForShowRequest: {
                    fields: {
                        showId: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                GetExtrasForShowResponse: {
                    fields: {
                        extras: {
                            rule: "repeated",
                            type: "ExtraContent",
                            id: 1
                        }
                    }
                },
                ShowType: {
                    values: {
                        DEFAULT: 0,
                        NARRATIVE: 1,
                        RECENCY_BASED: 2,
                        SEASON_RECENCY_BASED: 3
                    }
                },
                GetWatchedStateForSeasonResponse: {
                    fields: {
                        watchedStates: {
                            rule: "repeated",
                            type: "WatchedState",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                WatchedState: {
                    fields: {
                        itemId: {
                            type: "string",
                            id: 1
                        },
                        showId: {
                            type: "string",
                            id: 2
                        },
                        fullyWatched: {
                            type: "bool",
                            id: 3
                        },
                        subItemId: {
                            type: "google.protobuf.StringValue",
                            id: 4
                        },
                        subItemProgressMs: {
                            type: "google.protobuf.Int32Value",
                            id: 5
                        },
                        approximateProgress: {
                            type: "google.protobuf.Int32Value",
                            id: 6
                        },
                        clientTimestampMs: {
                            type: "int64",
                            id: 7
                        }
                    }
                },
                GetWatchedStateForSeasonRequest: {
                    fields: {
                        seasonId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                PublisherProfileLaunchInfo: {
                    fields: {
                        publisherId: {
                            type: "string",
                            id: 1
                        },
                        publisherNameId: {
                            type: "string",
                            id: 2
                        },
                        metadata: {
                            type: "PublisherMetadata",
                            id: 3
                        },
                        isSubscribed: {
                            type: "bool",
                            id: 4
                        },
                        isSubscribedNotifications: {
                            type: "bool",
                            id: 6
                        },
                        businessProfileId: {
                            type: "string",
                            id: 5
                        },
                        requiresSubscriptionQuery: {
                            type: "bool",
                            id: 7
                        }
                    }
                },
                GetEpisodeListResponse: {
                    fields: {
                        episodes: {
                            rule: "repeated",
                            type: "company.storydoc.StoryDoc",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                PublisherMetadata: {
                    fields: {
                        publisherFormalDisplayName: {
                            type: "string",
                            id: 1
                        },
                        description: {
                            type: "string",
                            id: 2
                        },
                        deepLink: {
                            type: "string",
                            id: 3
                        },
                        logoUrl: {
                            type: "string",
                            id: 4
                        },
                        storyViewingLogoUrl: {
                            type: "string",
                            id: 5
                        },
                        websiteUrl: {
                            type: "string",
                            id: 6
                        },
                        backgroundImageUrl: {
                            type: "string",
                            id: 7
                        },
                        bitmojiBackgroundImageTemplateId: {
                            type: "string",
                            id: 10
                        },
                        horizontalLogoUrl: {
                            type: "string",
                            id: 8
                        },
                        horizontalLogoHidden: {
                            type: "bool",
                            id: 9
                        },
                        primaryColor: {
                            type: "string",
                            id: 11
                        },
                        logoPlacement: {
                            type: "PublisherLogoPlacement",
                            id: 12
                        },
                        isBreakingNewsEnabled: {
                            type: "bool",
                            id: 13
                        }
                    }
                },
                GetEpisodeListRequest: {
                    fields: {
                        businessProfileId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        },
                        limit: {
                            type: "uint32",
                            id: 3
                        }
                    }
                },
                ListNotificationsResponse: {
                    fields: {
                        pageId: {
                            type: "string",
                            id: 1
                        },
                        nextPageId: {
                            type: "string",
                            id: 2
                        },
                        notifications: {
                            rule: "repeated",
                            type: "Notification",
                            id: 3
                        }
                    }
                },
                Notification: {
                    fields: {
                        id: {
                            type: "string",
                            id: 1
                        },
                        timestamp: {
                            type: "int64",
                            id: 2
                        },
                        type: {
                            type: "string",
                            id: 3
                        },
                        textAttachments: {
                            rule: "repeated",
                            type: "string",
                            id: 4
                        },
                        thumbnailUrl: {
                            type: "string",
                            id: 5
                        },
                        deepLinkUrl: {
                            type: "string",
                            id: 6
                        },
                        timestampDedupeDurationMs: {
                            type: "int64",
                            id: 9
                        },
                        roleNotification: {
                            type: "RoleNotification",
                            id: 7
                        },
                        postNotification: {
                            type: "PostNotification",
                            id: 8
                        },
                        milestoneNotification: {
                            type: "MilestoneNotification",
                            id: 10
                        }
                    },
                    nested: {
                        RoleNotification: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                },
                                userDisplayName: {
                                    type: "string",
                                    id: 2
                                },
                                role: {
                                    type: "string",
                                    id: 3
                                },
                                inviterUserId: {
                                    type: "string",
                                    id: 4
                                },
                                inviterDisplayName: {
                                    type: "string",
                                    id: 5
                                }
                            }
                        },
                        PostNotification: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                },
                                userDisplayName: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        MilestoneNotification: {
                            fields: {
                                milestone: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        }
                    }
                },
                ListNotificationsRequest: {
                    fields: {
                        businessId: {
                            type: "string",
                            id: 1
                        },
                        pageId: {
                            type: "string",
                            id: 2
                        }
                    }
                },
                ourstories: {
                    nested: {
                        service: {
                            nested: {
                                GetOurStoriesForBusinessIdResponse: {
                                    fields: {
                                        nextPageId: {
                                            type: "string",
                                            id: 1
                                        },
                                        stories: {
                                            rule: "repeated",
                                            type: "company.context.StoryManifest",
                                            id: 2
                                        }
                                    }
                                },
                                GetOurStoriesForBusinessIdRequest: {
                                    fields: {
                                        businessId: {
                                            type: "string",
                                            id: 1
                                        },
                                        pageId: {
                                            type: "string",
                                            id: 2
                                        },
                                        limit: {
                                            type: "int32",
                                            id: 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                insights: {
                    nested: {
                        LensOrder: {
                            values: {
                                LENS_ORDER_UNKNOWN: 0,
                                POPULAR: 1,
                                RECENT: 2
                            }
                        },
                        InfluencerBasicProfile: {
                            fields: {
                                displayName: {
                                    type: "string",
                                    id: 1
                                },
                                isOfficial: {
                                    type: "bool",
                                    id: 2
                                }
                            }
                        },
                        GetVideoInsightsRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                videoId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        GetInsightsSummaryByUserIdRequest: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        InfluencerInsights: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                },
                                basicProfile: {
                                    type: "InfluencerBasicProfile",
                                    id: 2
                                },
                                subscribeInsights: {
                                    type: "SubscribeInsights",
                                    id: 3
                                },
                                storyViewInsights: {
                                    type: "StoryViewInsights",
                                    id: 4
                                },
                                subscriberAudienceInsights: {
                                    type: "AudienceInsights",
                                    id: 5
                                },
                                videoInsights: {
                                    rule: "repeated",
                                    type: "VideoInsights",
                                    id: 6
                                },
                                dailyStoryViews: {
                                    rule: "repeated",
                                    type: "DailyStoryView",
                                    id: 7
                                },
                                aggregationTimestampMsecs: {
                                    type: "int64",
                                    id: 8
                                },
                                storyInsights: {
                                    type: "StoryInsights",
                                    id: 9
                                },
                                lensCreatorInsights: {
                                    type: "LensCreatorInsights",
                                    id: 10
                                },
                                dailyLensMetrics: {
                                    rule: "repeated",
                                    type: "DailyLensMetrics",
                                    id: 11
                                },
                                lensInsights: {
                                    type: "LensInsights",
                                    id: 12
                                }
                            }
                        },
                        GetLensInsightsResponse: {
                            fields: {
                                nextStartIndex: {
                                    type: "int32",
                                    id: 1
                                },
                                lensInsights: {
                                    rule: "repeated",
                                    type: "LensLifetimeInsights",
                                    id: 2
                                }
                            }
                        },
                        GetStoryManifestResponse: {
                            fields: {
                                manifest: {
                                    type: "company.context.StoryManifest",
                                    id: 1
                                }
                            }
                        },
                        GetLensInsightsRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                startIndex: {
                                    type: "int32",
                                    id: 2
                                },
                                limit: {
                                    type: "int32",
                                    id: 3
                                },
                                orderBy: {
                                    type: "LensOrder",
                                    id: 4
                                }
                            }
                        },
                        GetInsightsSummaryRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                includePreviousPeriods: {
                                    type: "bool",
                                    id: 2
                                },
                                excludeAudienceInsights: {
                                    type: "bool",
                                    id: 3
                                }
                            }
                        },
                        GetVideoInsightsResponse: {
                            fields: {
                                videoLifetimeMetrics: {
                                    rule: "repeated",
                                    type: "Metrics",
                                    id: 1
                                },
                                readReceiptSections: {
                                    rule: "repeated",
                                    type: "ReadReceiptSection",
                                    id: 3
                                },
                                isFinishedProcessing: {
                                    type: "bool",
                                    id: 2
                                }
                            }
                        },
                        GetInsightsSummaryResponse: {
                            fields: {
                                popularUserInsights: {
                                    type: "InfluencerInsights",
                                    id: 1
                                },
                                isWhitelisted: {
                                    type: "bool",
                                    id: 2
                                }
                            }
                        },
                        GetStoriesInsightsResponse: {
                            fields: {
                                nextPageId: {
                                    type: "string",
                                    id: 1
                                },
                                storyInsights: {
                                    rule: "repeated",
                                    type: "StoryLifetimeInsights",
                                    id: 2
                                }
                            }
                        },
                        GetStoryManifestRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                storyId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        GetStoriesInsightsRequest: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                pageId: {
                                    type: "string",
                                    id: 2
                                },
                                limit: {
                                    type: "int32",
                                    id: 3
                                }
                            }
                        },
                        ReadReceiptSection: {
                            fields: {
                                type: {
                                    type: "Type",
                                    id: 1
                                },
                                users: {
                                    rule: "repeated",
                                    type: "User",
                                    id: 2
                                }
                            },
                            nested: {
                                Type: {
                                    values: {
                                        UNKNOWN: 0,
                                        FRIENDS: 1,
                                        SUBSCRIBERS: 2,
                                        OTHER: 3
                                    }
                                }
                            }
                        },
                        AudienceInsights: {
                            fields: {
                                type: {
                                    type: "AudienceType",
                                    id: 1
                                },
                                genderDistribution: {
                                    rule: "repeated",
                                    type: "GenderStats",
                                    id: 2
                                },
                                ageDistribution: {
                                    rule: "repeated",
                                    type: "AgeStats",
                                    id: 3
                                },
                                genderAgeDistribution: {
                                    rule: "repeated",
                                    type: "GenderAgeStats",
                                    id: 4
                                },
                                subscribeSourceDistribution: {
                                    rule: "repeated",
                                    type: "SubscribeSourceStats",
                                    id: 5
                                },
                                lifestyleDistribution: {
                                    rule: "repeated",
                                    type: "LifestyleStats",
                                    id: 6
                                },
                                topRegions: {
                                    rule: "repeated",
                                    type: "RegionStats",
                                    id: 7
                                }
                            },
                            nested: {
                                AudienceType: {
                                    values: {
                                        AUDIENCE_UNKNOWN: 0,
                                        AUDIENCE_SUBSCRIBER: 1,
                                        AUDIENCE_STORY_VIEWER: 2,
                                        AUDIENCE_STORY_SNAP_VIEWER: 3
                                    }
                                },
                                GenderStats: {
                                    fields: {
                                        gender: {
                                            type: "UserGender",
                                            id: 1
                                        },
                                        ratio: {
                                            type: "double",
                                            id: 2
                                        }
                                    }
                                },
                                AgeStats: {
                                    fields: {
                                        age: {
                                            type: "AudienceBucketedAge",
                                            id: 1
                                        },
                                        ratio: {
                                            type: "double",
                                            id: 2
                                        }
                                    }
                                },
                                GenderAgeStats: {
                                    fields: {
                                        gender: {
                                            type: "UserGender",
                                            id: 1
                                        },
                                        age: {
                                            type: "AudienceBucketedAge",
                                            id: 2
                                        },
                                        ratio: {
                                            type: "double",
                                            id: 3
                                        }
                                    }
                                },
                                SubscribeSource: {
                                    values: {
                                        SUBSCRIBE_SOURCE_UNKNOWN: 0,
                                        SUBSCRIBE_SOURCE_SEARCH: 1,
                                        SUBSCRIBE_SOURCE_MAP: 2,
                                        SUBSCRIBE_SOURCE_PROMOTION: 3,
                                        SUBSCRIBE_SOURCE_SHARE: 4,
                                        SUBSCRIBE_SOURCE_DISCOVER_FEED: 5
                                    }
                                },
                                SubscribeSourceStats: {
                                    fields: {
                                        source: {
                                            type: "SubscribeSource",
                                            id: 1
                                        },
                                        ratio: {
                                            type: "double",
                                            id: 2
                                        }
                                    }
                                },
                                LifestyleStats: {
                                    fields: {
                                        lifestyle: {
                                            type: "string",
                                            id: 1
                                        },
                                        ratio: {
                                            type: "double",
                                            id: 2
                                        }
                                    }
                                },
                                RegionStats: {
                                    fields: {
                                        displayRegionName: {
                                            type: "string",
                                            id: 1
                                        },
                                        ratio: {
                                            type: "double",
                                            id: 2
                                        }
                                    }
                                }
                            }
                        },
                        Story: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                storyId: {
                                    type: "string",
                                    id: 2
                                },
                                numVideos: {
                                    type: "int32",
                                    id: 3
                                },
                                thumbnailUrl: {
                                    type: "string",
                                    id: 4
                                },
                                timeRange: {
                                    type: "TimeRange",
                                    id: 5
                                },
                                userContributedToStory: {
                                    type: "bool",
                                    id: 6
                                }
                            }
                        },
                        StoryInsights: {
                            fields: {
                                numStories: {
                                    type: "int64",
                                    id: 1
                                },
                                storyLifetimeInsights: {
                                    rule: "repeated",
                                    type: "StoryLifetimeInsights",
                                    id: 2
                                }
                            }
                        },
                        TimeRange: {
                            fields: {
                                startTimestamp: {
                                    type: "int64",
                                    id: 1
                                },
                                endTimestamp: {
                                    type: "int64",
                                    id: 2
                                }
                            }
                        },
                        LensLifetimeInsights: {
                            fields: {
                                lens: {
                                    type: "Lens",
                                    id: 1
                                },
                                lensLifetimeMetrics: {
                                    rule: "repeated",
                                    type: "Metrics",
                                    id: 2
                                }
                            }
                        },
                        LensCreatorInsights: {
                            fields: {
                                lensReachSinceLastWeek: {
                                    type: "int64",
                                    id: 1
                                },
                                lensReachSinceLastMonth: {
                                    type: "int64",
                                    id: 2
                                },
                                lensViewsSinceCreation: {
                                    type: "int64",
                                    id: 3
                                },
                                lensViewsSinceLastWeek: {
                                    type: "int64",
                                    id: 4
                                },
                                lensViewsSinceLastMonth: {
                                    type: "int64",
                                    id: 5
                                },
                                lensScansSinceCreation: {
                                    type: "int64",
                                    id: 6
                                },
                                lensScansSinceLastWeek: {
                                    type: "int64",
                                    id: 7
                                },
                                lensScansSinceLastMonth: {
                                    type: "int64",
                                    id: 8
                                },
                                lensSharesSinceCreation: {
                                    type: "int64",
                                    id: 9
                                },
                                lensSharesSinceLastWeek: {
                                    type: "int64",
                                    id: 10
                                },
                                lensSharesSinceLastMonth: {
                                    type: "int64",
                                    id: 11
                                },
                                lensPlaysSinceCreation: {
                                    type: "int64",
                                    id: 24
                                },
                                lensPlaysSinceLastWeek: {
                                    type: "int64",
                                    id: 25
                                },
                                lensPlaysSinceLastMonth: {
                                    type: "int64",
                                    id: 26
                                },
                                lensCameraPlayTimeSecsSinceCreation: {
                                    type: "int64",
                                    id: 12
                                },
                                lensCameraPlayTimeSecsSinceLastWeek: {
                                    type: "int64",
                                    id: 13
                                },
                                lensCameraPlayTimeSecsSinceLastMonth: {
                                    type: "int64",
                                    id: 14
                                },
                                lensCameraTotalViewTimeSecsSinceCreation: {
                                    type: "int64",
                                    id: 15
                                },
                                lensCameraTotalViewTimeSecsSinceLastWeek: {
                                    type: "int64",
                                    id: 16
                                },
                                lensCameraTotalViewTimeSecsSinceLastMonth: {
                                    type: "int64",
                                    id: 17
                                },
                                lensCameraPlayTimeMinsSinceCreation: {
                                    type: "int64",
                                    id: 18
                                },
                                lensCameraPlayTimeMinsSinceLastWeek: {
                                    type: "int64",
                                    id: 19
                                },
                                lensCameraPlayTimeMinsSinceLastMonth: {
                                    type: "int64",
                                    id: 20
                                },
                                lensCameraTotalViewTimeMinsSinceCreation: {
                                    type: "int64",
                                    id: 21
                                },
                                lensCameraTotalViewTimeMinsSinceLastWeek: {
                                    type: "int64",
                                    id: 22
                                },
                                lensCameraTotalViewTimeMinsSinceLastMonth: {
                                    type: "int64",
                                    id: 23
                                },
                                lensReachSincePreviousWeek: {
                                    type: "int64",
                                    id: 100
                                },
                                lensReachSincePreviousMonth: {
                                    type: "int64",
                                    id: 101
                                },
                                lensViewsSincePreviousWeek: {
                                    type: "int64",
                                    id: 102
                                },
                                lensViewsSincePreviousMonth: {
                                    type: "int64",
                                    id: 103
                                },
                                lensScansSincePreviousWeek: {
                                    type: "int64",
                                    id: 104
                                },
                                lensScansSincePreviousMonth: {
                                    type: "int64",
                                    id: 105
                                },
                                lensSharesSincePreviousWeek: {
                                    type: "int64",
                                    id: 106
                                },
                                lensSharesSincePreviousMonth: {
                                    type: "int64",
                                    id: 107
                                },
                                lensPlaysSincePreviousWeek: {
                                    type: "int64",
                                    id: 116
                                },
                                lensPlaysSincePreviousMonth: {
                                    type: "int64",
                                    id: 117
                                },
                                lensCameraPlayTimeSecsSincePreviousWeek: {
                                    type: "int64",
                                    id: 108
                                },
                                lensCameraPlayTimeSecsSincePreviousMonth: {
                                    type: "int64",
                                    id: 109
                                },
                                lensCameraTotalViewTimeSecsSincePreviousWeek: {
                                    type: "int64",
                                    id: 110
                                },
                                lensCameraTotalViewTimeSecsSincePreviousMonth: {
                                    type: "int64",
                                    id: 111
                                },
                                lensCameraPlayTimeMinsSincePreviousWeek: {
                                    type: "int64",
                                    id: 112
                                },
                                lensCameraPlayTimeMinsSincePreviousMonth: {
                                    type: "int64",
                                    id: 113
                                },
                                lensCameraTotalViewTimeMinsSincePreviousWeek: {
                                    type: "int64",
                                    id: 114
                                },
                                lensCameraTotalViewTimeMinsSincePreviousMonth: {
                                    type: "int64",
                                    id: 115
                                }
                            }
                        },
                        LensInsights: {
                            fields: {
                                numLenses: {
                                    type: "int64",
                                    id: 1
                                },
                                lensLifetimeInsights: {
                                    rule: "repeated",
                                    type: "LensLifetimeInsights",
                                    id: 2
                                }
                            }
                        },
                        Metrics: {
                            fields: {
                                name: {
                                    type: "MetricName",
                                    id: 1
                                },
                                value: {
                                    type: "double",
                                    id: 2
                                },
                                scoredValues: {
                                    rule: "repeated",
                                    type: "ScoredValue",
                                    id: 3
                                }
                            }
                        },
                        ScoredValue: {
                            fields: {
                                value: {
                                    type: "string",
                                    id: 1
                                },
                                score: {
                                    type: "double",
                                    id: 2
                                }
                            }
                        },
                        DailyStoryView: {
                            fields: {
                                totalViews: {
                                    type: "int64",
                                    id: 1
                                },
                                avgViewTimeSecs: {
                                    type: "float",
                                    id: 2
                                },
                                avgCompletionRatio: {
                                    type: "float",
                                    id: 3
                                },
                                timestampMsecs: {
                                    type: "int64",
                                    id: 4
                                },
                                reach: {
                                    type: "int64",
                                    id: 5
                                },
                                pctReachAreSubscribers: {
                                    type: "float",
                                    id: 6
                                },
                                storyViews: {
                                    type: "int64",
                                    id: 7
                                }
                            }
                        },
                        StoryLifetimeInsights: {
                            fields: {
                                story: {
                                    type: "Story",
                                    id: 1
                                },
                                storyLifetimeMetrics: {
                                    rule: "repeated",
                                    type: "Metrics",
                                    id: 2
                                }
                            }
                        },
                        SubscribeInsights: {
                            fields: {
                                subscribesSinceCreation: {
                                    type: "int64",
                                    id: 1
                                },
                                subscribesSinceLastWeek: {
                                    type: "int64",
                                    id: 2
                                },
                                subscribesSinceLastMonth: {
                                    type: "int64",
                                    id: 3
                                },
                                profileViewsSinceCreation: {
                                    type: "int64",
                                    id: 4
                                },
                                profileViewsSinceLastWeek: {
                                    type: "int64",
                                    id: 5
                                },
                                profileViewsSinceLastMonth: {
                                    type: "int64",
                                    id: 6
                                },
                                subscribesSincePreviousWeek: {
                                    type: "int64",
                                    id: 100
                                },
                                subscribesSincePreviousMonth: {
                                    type: "int64",
                                    id: 101
                                },
                                profileViewsSincePreviousWeek: {
                                    type: "int64",
                                    id: 102
                                },
                                profileViewsSincePreviousMonth: {
                                    type: "int64",
                                    id: 103
                                }
                            }
                        },
                        DailyLensMetrics: {
                            fields: {
                                timestampMsecs: {
                                    type: "int64",
                                    id: 1
                                },
                                lensReach: {
                                    type: "int64",
                                    id: 2
                                },
                                lensViews: {
                                    type: "int64",
                                    id: 3
                                },
                                lensScans: {
                                    type: "int64",
                                    id: 4
                                },
                                lensShares: {
                                    type: "int64",
                                    id: 5
                                },
                                lensPlays: {
                                    type: "int64",
                                    id: 10
                                },
                                lensCameraPlayTimeSec: {
                                    type: "int64",
                                    id: 6
                                },
                                lensCameraTotalViewTimeSec: {
                                    type: "float",
                                    id: 7
                                },
                                lensCameraPlayTimeMin: {
                                    type: "int64",
                                    id: 8
                                },
                                lensCameraTotalViewTimeMin: {
                                    type: "int64",
                                    id: 9
                                }
                            }
                        },
                        VideoInsights: {
                            fields: {
                                rawVideoId: {
                                    type: "string",
                                    id: 1
                                },
                                thumbnailUrl: {
                                    type: "string",
                                    id: 2
                                },
                                thumbnailIv: {
                                    type: "string",
                                    id: 3
                                },
                                thumbnailKey: {
                                    type: "string",
                                    id: 4
                                },
                                impressions: {
                                    type: "int64",
                                    id: 5
                                },
                                reach: {
                                    type: "int64",
                                    id: 6
                                },
                                shares: {
                                    type: "int64",
                                    id: 7
                                },
                                screenshots: {
                                    type: "int64",
                                    id: 8
                                }
                            }
                        },
                        UserGender: {
                            values: {
                                GENDER_UNKNOWN: 0,
                                GENDER_MALE: 1,
                                GENDER_FEMALE: 2
                            }
                        },
                        Lens: {
                            fields: {
                                businessId: {
                                    type: "string",
                                    id: 1
                                },
                                lensId: {
                                    type: "string",
                                    id: 2
                                },
                                name: {
                                    type: "string",
                                    id: 3
                                },
                                createdTimestampSec: {
                                    type: "int64",
                                    id: 4
                                },
                                thumbnailUrl: {
                                    type: "string",
                                    id: 5
                                },
                                iconUrl: {
                                    type: "string",
                                    id: 6
                                },
                                deeplinkUrl: {
                                    type: "string",
                                    id: 7
                                }
                            }
                        },
                        AudienceBucketedAge: {
                            values: {
                                AGE_UNKNOWN: 0,
                                AGE_LESS_THAN_13: 1,
                                AGE_13_TO_17: 2,
                                AGE_18_TO_20: 3,
                                AGE_21_TO_24: 4,
                                AGE_25_TO_34: 5,
                                AGE_35_TO_54: 6,
                                AGE_MORE_THAN_54: 7
                            }
                        },
                        StoryViewInsights: {
                            fields: {
                                viewsSinceCreation: {
                                    type: "int64",
                                    id: 1
                                },
                                viewsSinceLastWeek: {
                                    type: "int64",
                                    id: 2
                                },
                                viewsSinceLastMonth: {
                                    type: "int64",
                                    id: 3
                                },
                                viewTimeSecsSinceCreation: {
                                    type: "float",
                                    id: 4
                                },
                                viewTimeSecsLastWeek: {
                                    type: "float",
                                    id: 5
                                },
                                viewTimeSecsLastMonth: {
                                    type: "float",
                                    id: 6
                                },
                                uniqueViewersSinceLastWeek: {
                                    type: "int64",
                                    id: 7
                                },
                                uniqueViewersSinceLastMonth: {
                                    type: "int64",
                                    id: 8
                                },
                                uniqueViewersSubscribersSinceLastWeek: {
                                    type: "int64",
                                    id: 9
                                },
                                uniqueViewersSubscribersSinceLastMonth: {
                                    type: "int64",
                                    id: 10
                                },
                                uniqueViewersNonSubscribersSinceLastWeek: {
                                    type: "int64",
                                    id: 11
                                },
                                uniqueViewersNonSubscribersSinceLastMonth: {
                                    type: "int64",
                                    id: 12
                                },
                                averageViewTimeSinceLastWeek: {
                                    type: "float",
                                    id: 13
                                },
                                averageViewTimeSinceLastMonth: {
                                    type: "float",
                                    id: 14
                                },
                                averageCompletionPercentageSinceLastWeek: {
                                    type: "float",
                                    id: 15
                                },
                                averageCompletionPercentageSinceLastMonth: {
                                    type: "float",
                                    id: 16
                                },
                                viewsPreviousWeek: {
                                    type: "int64",
                                    id: 100
                                },
                                viewsPreviousMonth: {
                                    type: "int64",
                                    id: 101
                                },
                                viewTimeSecsPreviousWeek: {
                                    type: "float",
                                    id: 102
                                },
                                viewTimeSecsPreviousMonth: {
                                    type: "float",
                                    id: 103
                                },
                                uniqueViewersPreviousWeek: {
                                    type: "int64",
                                    id: 104
                                },
                                uniqueViewersPreviousMonth: {
                                    type: "int64",
                                    id: 105
                                },
                                uniqueViewersSubscribersPreviousWeek: {
                                    type: "int64",
                                    id: 106
                                },
                                uniqueViewersSubscribersPreviousMonth: {
                                    type: "int64",
                                    id: 107
                                },
                                uniqueViewersNonSubscribersPreviousWeek: {
                                    type: "int64",
                                    id: 108
                                },
                                uniqueViewersNonSubscribersPreviousMonth: {
                                    type: "int64",
                                    id: 109
                                },
                                averageViewTimePreviousWeek: {
                                    type: "float",
                                    id: 110
                                },
                                averageViewTimePreviousMonth: {
                                    type: "float",
                                    id: 111
                                },
                                averageCompletionPercentagePreviousWeek: {
                                    type: "float",
                                    id: 112
                                },
                                averageCompletionPercentagePreviousMonth: {
                                    type: "float",
                                    id: 113
                                }
                            }
                        },
                        MetricName: {
                            values: {
                                UNKNOWN_METRIC_NAME: 0,
                                UNIQUE_VIEWERS: 1,
                                TOTAL_VIEWS: 2,
                                AVERAGE_VIEW_TIME: 3,
                                AVERAGE_COMPLETION_PERCENTAGE: 4,
                                SHARES: 5,
                                SCREENSHOTS: 6,
                                SWIPE_UPS: 7,
                                TAP_FORWARDS: 8,
                                TAP_BACKWARDS: 9,
                                SWIPE_AWAYS: 10,
                                UNIQUE_VIEWERS_SUBSCRIBERS: 11,
                                UNIQUE_VIEWERS_NON_SUBSCRIBERS: 12,
                                TOTAL_VIEW_TIME: 13,
                                SUBSCRIBERS: 14,
                                STORY_VIEWS: 15,
                                SNAP_VIEWS: 16,
                                LENS_REACH: 107,
                                LENS_VIEWS: 101,
                                LENS_SENDS: 102,
                                LENS_SCANS: 103,
                                LENS_SHARES: 104,
                                LENS_PLAYS: 108,
                                LENS_CAMERA_PLAY_TIME: 105,
                                LENS_CAMERA_TOTAL_VIEW_TIME: 106,
                                TOP_SLCS: 200,
                                TOP_LOCATIONS: 201
                            }
                        },
                        User: {
                            fields: {
                                userId: {
                                    type: "string",
                                    id: 1
                                },
                                username: {
                                    type: "string",
                                    id: 2
                                },
                                displayName: {
                                    type: "string",
                                    id: 3
                                },
                                bitmojiAvatarId: {
                                    type: "string",
                                    id: 4
                                },
                                bitmojiSelfieId: {
                                    type: "string",
                                    id: 5
                                },
                                isOfficial: {
                                    type: "bool",
                                    id: 6
                                }
                            }
                        }
                    }
                }
            }
        },
        serengeti: {
            nested: {
                StylizationAndroid: {
                    fields: {
                        backgroundColor: {
                            type: "string",
                            id: 1
                        }
                    }
                },
                Link: {
                    fields: {
                        url: {
                            type: "string",
                            id: 1
                        },
                        serviceId: {
                            type: "string",
                            id: 5
                        },
                        stylizationIos: {
                            type: "StylizationIOS",
                            id: 2
                        },
                        stylizationAndroid: {
                            type: "StylizationAndroid",
                            id: 3
                        },
                        parameters: {
                            type: "Parameters",
                            id: 4
                        }
                    }
                },
                Rect: {
                    fields: {
                        x: {
                            type: "double",
                            id: 1
                        },
                        y: {
                            type: "double",
                            id: 2
                        },
                        width: {
                            type: "double",
                            id: 3
                        },
                        height: {
                            type: "double",
                            id: 4
                        }
                    }
                },
                Parameters: {
                    fields: {
                        entries: {
                            rule: "repeated",
                            type: "Entry",
                            id: 1
                        }
                    },
                    nested: {
                        Entry: {
                            fields: {
                                key: {
                                    type: "string",
                                    id: 1
                                },
                                value: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        }
                    }
                },
                StylizationIOS: {
                    fields: {
                        backgroundColor: {
                            type: "string",
                            id: 1
                        },
                        closeButtonFrame: {
                            type: "Rect",
                            id: 2
                        },
                        closeButtonImageName: {
                            type: "string",
                            id: 3
                        },
                        statusBarStyle: {
                            type: "StatusBarStyle",
                            id: 4
                        },
                        loadingIndicatorStyle: {
                            type: "LoadingIndicatorStyle",
                            id: 5
                        },
                        showBlurBackground: {
                            type: "bool",
                            id: 6
                        },
                        backgroundDismissBehavior: {
                            type: "ViewControllerBackgroundDismissBehavior",
                            id: 7
                        }
                    },
                    nested: {
                        StatusBarStyle: {
                            values: {
                                BLACK: 0,
                                HIDDEN: 1,
                                WHITE: 2
                            }
                        },
                        LoadingIndicatorStyle: {
                            values: {
                                LOADING_INDICATOR_STYLE_WHITE: 0,
                                LOADING_INDICATOR_STYLE_GRAY: 1,
                                LOADING_INDICATOR_STYLE_DARK_GRAY: 2
                            }
                        },
                        ViewControllerBackgroundDismissBehavior: {
                            values: {
                                NEVER_DISMISS: 0,
                                DISMISS_LATER: 1,
                                DISMISS_IMMEDIATELY: 2
                            }
                        }
                    }
                }
            }
        },
        address: {},
        google: {
            nested: {
                api: {},
                protobuf: {
                    nested: {
                        DoubleValue: {
                            fields: {
                                value: {
                                    type: "double",
                                    id: 1
                                }
                            }
                        },
                        FloatValue: {
                            fields: {
                                value: {
                                    type: "float",
                                    id: 1
                                }
                            }
                        },
                        Int64Value: {
                            fields: {
                                value: {
                                    type: "int64",
                                    id: 1
                                }
                            }
                        },
                        UInt64Value: {
                            fields: {
                                value: {
                                    type: "uint64",
                                    id: 1
                                }
                            }
                        },
                        Int32Value: {
                            fields: {
                                value: {
                                    type: "int32",
                                    id: 1
                                }
                            }
                        },
                        UInt32Value: {
                            fields: {
                                value: {
                                    type: "uint32",
                                    id: 1
                                }
                            }
                        },
                        BoolValue: {
                            fields: {
                                value: {
                                    type: "bool",
                                    id: 1
                                }
                            }
                        },
                        StringValue: {
                            fields: {
                                value: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        BytesValue: {
                            fields: {
                                value: {
                                    type: "bytes",
                                    id: 1
                                }
                            }
                        },
                        Empty: {
                            fields: {}
                        }
                    }
                }
            }
        },
        ranking: {
            nested: {
                core: {
                    nested: {
                        StoryCorpus: {
                            fields: {},
                            nested: {
                                Corpus: {
                                    values: {
                                        UNSET: 0,
                                        TOPICS: 1,
                                        EVENTS: 2,
                                        PLACES: 3,
                                        LOCATIONS: 4,
                                        BREAKING_NEWS: 5,
                                        TRENDING_TOPICS: 6,
                                        REGIONAL_TOPICS: 7,
                                        POLYGON: 8,
                                        TOPSHARED: 9,
                                        SNAPCASTS: 10,
                                        SPOTTED: 11,
                                        MANUAL_STORYBUILDER: 12,
                                        SOLO: 13,
                                        MAPS_STORY: 14,
                                        MAPS_CALLOUT: 15,
                                        PUBLISHER: 16,
                                        PUBLIC_USER: 17,
                                        RECOMMENDED_USER: 18,
                                        PROMOTED_STORY: 19,
                                        GROUP_STORY: 20,
                                        LIVE_STREAM: 21,
                                        FEATURED: 22,
                                        COGNAC: 23,
                                        LENS_OBJECT: 24,
                                        LENS_CHALLENGE: 27,
                                        LENS_CHALLENGE_STORY: 28,
                                        SELECTION: 25,
                                        FRIEND_STORY: 26,
                                        CHANNEL_PIVOT: 29,
                                        CUSTOM_STORY: 30,
                                        OUR_STORY: 31,
                                        LENS_CATEGORY: 32,
                                        BADGE: 33,
                                        UNUSED_34: 34,
                                        UNUSED_35: 35,
                                        UNUSED_36: 36,
                                        UNUSED_37: 37,
                                        UNUSED_38: 38,
                                        UNUSED_39: 39,
                                        UNUSED_40: 40,
                                        UNUSED_41: 41,
                                        UNUSED_42: 42,
                                        UNUSED_43: 43,
                                        UNUSED_44: 44,
                                        UNUSED_45: 45,
                                        UNUSED_46: 46,
                                        UNUSED_47: 47,
                                        UNUSED_48: 48,
                                        UNUSED_49: 49,
                                        UNUSED_50: 50
                                    }
                                }
                            }
                        },
                        CompositeStoryId: {
                            fields: {
                                corpus: {
                                    type: "StoryCorpus.Corpus",
                                    id: 1
                                },
                                id: {
                                    type: "string",
                                    id: 2
                                },
                                version: {
                                    type: "int64",
                                    id: 3
                                }
                            }
                        },
                        LogoDisplay: {
                            fields: {},
                            nested: {
                                Enum: {
                                    values: {
                                        BOTTOM: 0,
                                        OFF: 1
                                    }
                                }
                            }
                        },
                        PublisherType: {
                            values: {
                                PUBLISHER_UNKNOWN: 0,
                                PUBLISHER_DISCOVER: 1,
                                PUBLISHER_SHOWS: 2
                            }
                        },
                        PublisherAdSetting: {
                            fields: {},
                            nested: {
                                Enum: {
                                    values: {
                                        SKIPPABLE: 0,
                                        NON_SKIPPABLE: 1
                                    }
                                }
                            }
                        }
                    }
                },
                serving: {
                    nested: {
                        jaguar: {
                            nested: {
                                DebugOption: {
                                    fields: {},
                                    nested: {
                                        Enum: {
                                            values: {
                                                OFF: 0,
                                                HTML: 2,
                                                PB: 3,
                                                HTML_AND_PB: 4
                                            }
                                        }
                                    }
                                },
                                UpNextRequest: {
                                    fields: {
                                        requestId: {
                                            type: "string",
                                            id: 1
                                        },
                                        requestTimestampMs: {
                                            type: "int64",
                                            id: 2
                                        },
                                        currentStoryId: {
                                            type: "ranking.core.CompositeStoryId",
                                            id: 5
                                        },
                                        recommendationType: {
                                            type: "RecommendationType.Enum",
                                            id: 9
                                        },
                                        requestSource: {
                                            type: "RequestSource.Enum",
                                            id: 10
                                        },
                                        triggeringFeedType: {
                                            type: "int32",
                                            id: 11
                                        },
                                        debug: {
                                            type: "DebugOption.Enum",
                                            id: 8
                                        }
                                    },
                                    nested: {
                                        RecommendationType: {
                                            fields: {},
                                            nested: {
                                                Enum: {
                                                    values: {
                                                        STORY_RECOMMENDATION: 0,
                                                        ACCOUNT_RECOMMENDATION: 1
                                                    }
                                                }
                                            }
                                        },
                                        RequestSource: {
                                            fields: {},
                                            nested: {
                                                Enum: {
                                                    values: {
                                                        UNKNOWN: 0,
                                                        DISCOVER: 1,
                                                        DISCOVER_SHOWS: 2,
                                                        PROFILE: 3
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                Publisher: {
                                    fields: {
                                        name: {
                                            type: "string",
                                            id: 1
                                        },
                                        publisherName: {
                                            type: "string",
                                            id: 2
                                        },
                                        publisherFormalName: {
                                            type: "string",
                                            id: 3
                                        },
                                        publisherId: {
                                            type: "int64",
                                            id: 4
                                        },
                                        businessProfileId: {
                                            type: "string",
                                            id: 14
                                        },
                                        primaryColor: {
                                            type: "string",
                                            id: 5
                                        },
                                        secondaryColor: {
                                            type: "string",
                                            id: 6
                                        },
                                        publisherDeeplinkUrl: {
                                            type: "string",
                                            id: 7
                                        },
                                        profileLogoDisplay: {
                                            type: "ranking.core.LogoDisplay.Enum",
                                            id: 19
                                        },
                                        publisherDescription: {
                                            type: "string",
                                            id: 8
                                        },
                                        publisherType: {
                                            type: "ranking.core.PublisherType",
                                            id: 9
                                        },
                                        isNews: {
                                            type: "bool",
                                            id: 10
                                        },
                                        rollingNewsEnabled: {
                                            type: "bool",
                                            id: 21
                                        },
                                        filledIconUrl: {
                                            type: "string",
                                            id: 11
                                        },
                                        horizontalIconUrl: {
                                            type: "string",
                                            id: 12
                                        },
                                        heroImageUrl: {
                                            type: "string",
                                            id: 16
                                        },
                                        heroImageBitmojiTemplateId: {
                                            type: "string",
                                            id: 18
                                        },
                                        websiteUrl: {
                                            type: "string",
                                            id: 17
                                        },
                                        isSubscribable: {
                                            type: "bool",
                                            id: 13
                                        },
                                        allowNotifOptInMsg: {
                                            type: "bool",
                                            id: 15
                                        },
                                        adSetting: {
                                            type: "ranking.core.PublisherAdSetting.Enum",
                                            id: 20
                                        }
                                    }
                                },
                                PublicUserStoryMetadata: {
                                    fields: {
                                        userId: {
                                            type: "string",
                                            id: 1
                                        },
                                        displayName: {
                                            type: "string",
                                            id: 3
                                        },
                                        username: {
                                            type: "string",
                                            id: 4
                                        },
                                        isPopular: {
                                            type: "bool",
                                            id: 6
                                        },
                                        isOfficial: {
                                            type: "bool",
                                            id: 7
                                        },
                                        bitmojiAvatarId: {
                                            type: "string",
                                            id: 8
                                        },
                                        bitmojiAvatarSelfieId: {
                                            type: "string",
                                            id: 14
                                        },
                                        impalaStoryMetadata: {
                                            type: "ImpalaStoryMetadata",
                                            id: 17
                                        }
                                    }
                                },
                                PublisherShowMetadata: {
                                    fields: {
                                        showId: {
                                            type: "string",
                                            id: 1
                                        },
                                        showName: {
                                            type: "string",
                                            id: 2
                                        },
                                        showDescription: {
                                            type: "string",
                                            id: 3
                                        },
                                        showHeroImageUrl: {
                                            type: "string",
                                            id: 4
                                        },
                                        coverMediaManifest: {
                                            type: "string",
                                            id: 13
                                        },
                                        showType: {
                                            type: "impala.ShowType",
                                            id: 5
                                        },
                                        episodeSubtitle: {
                                            type: "string",
                                            id: 7
                                        },
                                        seasonId: {
                                            type: "string",
                                            id: 11
                                        },
                                        seasonNumber: {
                                            type: "int32",
                                            id: 9
                                        },
                                        episodeNumber: {
                                            type: "int32",
                                            id: 10
                                        },
                                        profileOverlayButtonText: {
                                            type: "string",
                                            id: 8
                                        },
                                        profileLogoDisplay: {
                                            type: "ranking.core.LogoDisplay.Enum",
                                            id: 12
                                        }
                                    }
                                },
                                ImpalaStoryMetadata: {
                                    fields: {
                                        businessId: {
                                            type: "string",
                                            id: 1
                                        },
                                        businessName: {
                                            type: "string",
                                            id: 2
                                        },
                                        businessLogoUrl: {
                                            type: "string",
                                            id: 3
                                        },
                                        category: {
                                            type: "string",
                                            id: 5
                                        }
                                    }
                                },
                                UpNextResponse: {
                                    fields: {
                                        requestId: {
                                            type: "string",
                                            id: 1
                                        },
                                        recommendedStories: {
                                            rule: "repeated",
                                            type: "StoryCard",
                                            id: 2
                                        },
                                        debugHtml: {
                                            type: "string",
                                            id: 3
                                        },
                                        debugPb: {
                                            type: "bytes",
                                            id: 4
                                        }
                                    }
                                },
                                StoryCard: {
                                    fields: {
                                        storyId: {
                                            type: "string",
                                            id: 1
                                        },
                                        compositeStoryId: {
                                            type: "ranking.core.CompositeStoryId",
                                            id: 12
                                        },
                                        storyDedupeFp: {
                                            type: "fixed64",
                                            id: 17
                                        },
                                        storyCacheFp: {
                                            type: "fixed64",
                                            id: 24
                                        },
                                        publisherStoryCard: {
                                            type: "PublisherStoryCard",
                                            id: 3
                                        },
                                        publicUserStoryCard: {
                                            type: "PublicUserStoryCard",
                                            id: 4
                                        },
                                        storySubtype: {
                                            type: "StorySubtype",
                                            id: 23
                                        },
                                        tileAspectRatio: {
                                            type: "float",
                                            id: 7
                                        },
                                        tileDominantColor: {
                                            type: "string",
                                            id: 18
                                        },
                                        isSubscribed: {
                                            type: "bool",
                                            id: 8
                                        },
                                        isNotificationOptedIn: {
                                            type: "bool",
                                            id: 32
                                        },
                                        isFeatured: {
                                            type: "bool",
                                            id: 9
                                        },
                                        featuredBannerText: {
                                            type: "string",
                                            id: 10
                                        },
                                        score: {
                                            type: "float",
                                            id: 13
                                        },
                                        rankShouldBeFixed: {
                                            type: "bool",
                                            id: 14
                                        },
                                        notModerated: {
                                            type: "bool",
                                            id: 15
                                        },
                                        hideAfterWatch: {
                                            type: "int32",
                                            id: 16
                                        },
                                        hideSubscribeButton: {
                                            type: "bool",
                                            id: 28
                                        },
                                        latestUpdateTimestampSecs: {
                                            type: "int64",
                                            id: 19
                                        },
                                        hasUpnextRecommendation: {
                                            type: "bool",
                                            id: 26
                                        },
                                        tapAction: {
                                            type: "TapAction",
                                            id: 31
                                        }
                                    },
                                    nested: {
                                        StorySubtype: {
                                            values: {
                                                SUBTYPE_UNKNOWN: 0,
                                                SUBTYPE_PUBLIC_USER_OFFICIAL: 15,
                                                SUBTYPE_PUBLIC_USER_POPULAR: 16,
                                                SUBTYPE_PUBLIC_USER_OTHERS: 7,
                                                SUBTYPE_PUBLISHER_SHOW: 9,
                                                SUBTYPE_PUBLISHER_ORIGINAL: 13,
                                                SUBTYPE_PUBLISHER_CURATED: 14,
                                                SUBTYPE_PUBLISHER_INTERNAL_CURATED: 17,
                                                SUBTYPE_PUBLISHER_HN_NEWS: 18,
                                                SUBTYPE_PUBLISHER_OTHERS: 10,
                                                SUBTYPE_PUBLIC_USER_SUBSCRIPTION: 1,
                                                SUBTYPE_PUBLIC_USER_FRIENDS_FOLLOWING: 2,
                                                SUBTYPE_PUBLIC_USER_FOLLOWING_SIMILARITY: 3,
                                                SUBTYPE_PUBLIC_USER_TAP_SIMILARITY: 4,
                                                SUBTYPE_PUBLIC_USER_SUB_SIMILARITY: 12,
                                                SUBTYPE_PUBLIC_USER_COHORTS: 5,
                                                SUBTYPE_PUBLIC_USER_IMPORTANT: 6,
                                                SUBTYPE_PUBLIC_USER_LOCAL: 8,
                                                SUBTYPE_PUBLIC_USER_RANDOM_BUCKET: 11,
                                                SUBTYPE_UNUSED_19: 19,
                                                SUBTYPE_UNUSED_20: 20,
                                                SUBTYPE_UNUSED_21: 21,
                                                SUBTYPE_UNUSED_22: 22,
                                                SUBTYPE_UNUSED_23: 23,
                                                SUBTYPE_UNUSED_24: 24,
                                                SUBTYPE_UNUSED_25: 25
                                            }
                                        },
                                        TapAction: {
                                            fields: {},
                                            nested: {
                                                Enum: {
                                                    values: {
                                                        PLAY_STORY: 0,
                                                        OPEN_PROFILE: 1
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                PublisherStoryCard: {
                                    fields: {
                                        publisher: {
                                            type: "Publisher",
                                            id: 1
                                        },
                                        showMetadata: {
                                            type: "PublisherShowMetadata",
                                            id: 7
                                        }
                                    }
                                },
                                PublicUserStoryCard: {
                                    fields: {
                                        metadata: {
                                            type: "PublicUserStoryMetadata",
                                            id: 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                location: {},
                pii: {
                    nested: {
                        user: {
                            nested: {
                                profile: {}
                            }
                        }
                    }
                },
                ml: {
                    nested: {
                        centralkitchen: {}
                    }
                },
                indexing: {
                    nested: {
                        jaguar: {}
                    }
                }
            }
        }
    }
};

module.exports = function(e, i) {
    for (var t, s = function(e) {
            for (var i in e.$type && (e.$type = void 0), e) e[i] && (e[i].$type || Array.isArray(e[i])) && (e[i] = s(e[i]));
            return e
        }, n = {}, d = [{
            j: i.nested,
            p: [],
            o: n
        }], r = function() {
            var n = d.shift(),
                r = function(r) {
                    if (n.o[r] = n.o[r] || {}, n.j[r].nested && d.push({
                            j: n.j[r].nested,
                            p: n.p.concat([r]),
                            o: n.o[r]
                        }), n.j[r].fields) {
                        var p, o = function() {
                            t = t || e.Root.fromJSON(i), p = p || n.p.concat([r]).join(".")
                        };
                        n.o[r].create = function(e) {
                            return o(), s(t.lookupType(p).create(e))
                        }, n.o[r].encode = function(e) {
                            return o(), t.lookupType(p).encode(e).finish()
                        }, n.o[r].decode = function(e) {
                            return o(), s(t.lookupType(p).decode(new Uint8Array(e)))
                        }
                    }
                };
            for (var p in n.j) r(p)
        }; d.length;) r();
    return n
}(pb, json);