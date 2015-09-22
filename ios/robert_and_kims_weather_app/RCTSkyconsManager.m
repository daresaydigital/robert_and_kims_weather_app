//
//  RCTSkyconsManager.m
//  robert_and_kims_weather_app
//
//  Created by Alex Kent on 22/09/2015.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "RCTSkyconsManager.h"

@implementation RCTSKYClearDayManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYClearDay;
  return icon;
}
@end

@implementation RCTSKYClearNightManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYClearNight;
  return icon;
}
@end

@implementation RCTSKYPartlyCloudyDayManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYPartlyCloudyDay;
  return icon;
}
@end

@implementation RCTSKYPartlyCloudyNightManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYPartlyCloudyNight;
  return icon;
}
@end

@implementation RCTSKYCloudyManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYCloudy;
  return icon;
}
@end

@implementation RCTSKYRainManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYRain;
  return icon;
}
@end

@implementation RCTSKYSleetManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYSleet;
  return icon;
}
@end

@implementation RCTSKYSnowManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYSnow;
  return icon;
}
@end

@implementation RCTSKYWindManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYWind;
  return icon;
}
@end

@implementation RCTSKYFogManager
RCT_EXPORT_MODULE()
- (UIView *)view
{
  SKYIconView* icon = [[SKYIconView alloc] init];
  icon.type = SKYFog;
  return icon;
}
@end
