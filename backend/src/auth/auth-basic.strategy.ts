import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      passReqToCallback: true,
    });
  }

  public validate = async (req, username, password): Promise<boolean> => {
    const configUsername = this.configService.get<string>('HTTP_BASIC_USER');
    const configPassword = this.configService.get<string>('HTTP_BASIC_PASS');

    if (configUsername === username && configPassword === password) {
      return true;
    }

    throw new UnauthorizedException();
  };
}
